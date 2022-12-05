import ss from "./style.module.css"
import { useEffect, useState } from "react"
import { createUserIdentity } from "../../createUserIdentity"
import { sendAccountRequest } from "../../../http/modalsApi"
import { getAccountsType, getCountries, getCurrencies } from "../../../http/dropdownApi"
import { FileUpload } from "../../fileUpload"
import { setCreateAccountRequestModalAction } from "../../../store/modals/actions"
import { setUpdaterAction } from "../../../store/updater/actions"
import { useDispatch } from "react-redux"
import { colors } from "../../colors"
import { ModalBtn } from "../modalBtn"

export const CreateAccountRequest = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [countryIso, setCountryIso] = useState(null)
  const [countryChange, setCountryChange] = useState(false) // for tracking update iso

  const [fileToBeUpload, setFileToBeUpload] = useState(null)
  const [typeId, setTypeId] = useState("")
  const [locationID, setLocationID] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState(0)
  const [totalSum, setTotalSum] = useState(0)
  const [description, setDescription] = useState("")
  const [currency, setCurrency] = useState("")
  const [oid, setOid] = useState(null)

  const [accountTypes, setAccountTypes] = useState(null)
  const [countries, setCountries] = useState(null)
  const [currencies, setCurrencies] = useState(null)

  function sendRequestHandler(e) {
    e.preventDefault()
    const ui = createUserIdentity()
    const ar = { typeID: typeId, locationID, quantity, price, description, currencyID: currency }

    sendAccountRequest(ui, ar)
      .then((res) => {
        if (fileToBeUpload) setOid(res.message)
        else {
          dispatch(setCreateAccountRequestModalAction(false))
          dispatch(setUpdaterAction())
        }
        setQuantity("")
        setPrice("")
        setDescription("")
      })
      .catch((e) => console.log(e.message))
  }

  useEffect(() => {
    const newPrice = totalSum / quantity
    setPrice(newPrice.toString())
  }, [totalSum])

  useEffect(() => {
    setTotalSum(price * quantity)
  }, [price, quantity])

  useEffect(() => {
    const currentCountry = countries && countries.filter(country => country._id === locationID)[0]
    setCountryIso(currentCountry && currentCountry.iso)
  }, [countryChange, countries, locationID])

  useEffect(() => {
    setLoading(true)
    getAccountsType()
      .then((res) => {
        setAccountTypes(res)
        setTypeId(res[0]._id)
      })
    getCountries()
      .then((res) => {
        setCountries(res)
        setCountryIso(res[0].iso)
        setLocationID(res[0]._id)
      })
    getCurrencies()
      .then((res) => {
        setCurrencies(res)
        setCurrency(res[0]._id)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <h1>Loading..</h1>
  return (
    <div className={ss.wrapper}>
      <div className={ss.title} style={{ color: colors.modals.title }}>
        Создать заявку на аккаунт
      </div>
      <form onSubmit={(e) => sendRequestHandler(e)} className={ss.formWrapper}>
        <div className={ss.left}>
          <div className={ss.quantityPriceTotal} style={{ backgroundColor: colors.modals.blockBckg }}>
            <div className={ss.quantity}>
              <div className={ss.label}>Количество</div>
              <input
                style={colors.modals.input}
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div className={ss.price}>
              <div className={ss.label}>Цена</div>
              <input
                style={colors.modals.input}
                type="number"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))} />
            </div>
            <div className={ss.totalSum}>
              <div className={ss.label}>Итого</div>
              <input
                style={colors.modals.input}
                type="number"
                value={totalSum}
                onChange={(e) => setTotalSum(parseFloat(e.target.value))} />
            </div>
          </div>
          <div className={ss.accountTypeCountryCurrency} style={{ backgroundColor: colors.modals.blockBckg }}>
            <div className={ss.currency}>
              <div className={ss.label}>Валюта</div>
              <select
                style={colors.modals.input}
                onChange={(e) => setCurrency(e.target.value)}>
                {currencies && currencies.map(currency => (
                  <option
                    key={currency._id}
                    value={currency._id}>
                    {currency.iso}
                  </option>
                ))}
              </select>
            </div>
            <div className={ss.accountType}>
              <div className={ss.label}>Тип аккаунта</div>
              <select
                style={colors.modals.input}
                onChange={(e) => setTypeId(e.target.value)}>
                {accountTypes && accountTypes.map(at => (
                  <option
                    key={at._id}
                    value={at._id}>
                    {at.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={ss.country}>
              <div className={ss.labelIso}>
                <div className={ss.label}>Страна</div>
                <div className={ss.iso}>
                  {countryIso}
                </div>
              </div>
              <select
                style={colors.modals.input}
                onChange={(e) => {
                  setCountryChange(!countryChange)
                  setLocationID(e.target.value)
                }}>
                {countries && countries.map((country) => (
                  <option
                    key={country._id}
                    value={country._id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={ss.right}>
          <textarea
            style={colors.modals.input}
            placeholder="Описание.."
            cols="30"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
          <FileUpload
            oid={oid}
            setOid={setOid}
            closeCb={() => setCreateAccountRequestModalAction(false)}
            fileToBeUpload={fileToBeUpload}
            setFileToBeUpload={setFileToBeUpload} />
          <ModalBtn>
            Добавить
          </ModalBtn>
        </div>
      </form >
    </div>
  )
}