import ss from "./style.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUserIdentity } from "../../createUserIdentity"
import { updateOrderInfo } from "../../../http/modalsApi"
import { getOrderById } from "../../../http/actionBtns"
import { getAccountsType, getCountries, getCurrencies } from "../../../http/dropdownApi"
import { setEditOrderModalAction } from "../../../store/modals/actions"
import { FileUpload } from "../../fileUpload"
import { setUpdaterAction } from "../../../store/updater/actions"
import { colors } from "../../colors"
import { ModalBtn } from "../modalBtn"

export const EditOrder = () => {
  const ui = createUserIdentity()
  const dispatch = useDispatch()

  const [oid, setOid] = useState(null)
  const [loading, setLoading] = useState(false)
  const [accountTypes, setAccountTypes] = useState(null)
  const [countries, setCountries] = useState(null)
  const [currencies, setCurrencies] = useState(null)
  const [fileToBeUpload, setFileToBeUpload] = useState(null)
  const [modifyInfo, setModifyInfo] = useState({
    quantity: 0,
    price: 0,
    totalSum: 0,
    accountType: "",
    location: "",
    description: "",
    currencyID: ""
  })

  const { orderIdForUpdate } = useSelector(state => state.modals)

  function sendInfo(e) {
    e.preventDefault()
    updateOrderInfo(orderIdForUpdate, ui, modifyInfo)
      .then(() => {
        if (fileToBeUpload) setOid(orderIdForUpdate)
        else {
          dispatch(setEditOrderModalAction(false))
          dispatch(setUpdaterAction())
        }
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    setModifyInfo({ ...modifyInfo, totalSum: modifyInfo.price * modifyInfo.quantity })
  }, [modifyInfo.price, modifyInfo.quantity])

  useEffect(() => {
    setModifyInfo({ ...modifyInfo, price: modifyInfo.totalSum / modifyInfo.quantity })
  }, [modifyInfo.totalSum])

  useEffect(() => {
    console.log(orderIdForUpdate);
    setLoading(true)
    orderIdForUpdate && getOrderById(orderIdForUpdate)
      .then((res) => {
        console.log(res);
        setModifyInfo({
          quantity: res.accountRequest.quantity,
          accountType: res.accountRequest.type.name,
          location: res.accountRequest.location.name,
          price: res.price,
          description: res.description,
        })
      })
    getAccountsType()
      .then((res) => setAccountTypes(res))
    getCountries()
      .then((res) => setCountries(res))
    getCurrencies()
      .then((res) => setCurrencies(res))
      .finally(() => setLoading(false))
  }, [orderIdForUpdate])

  if (loading) return <h1>Loading..</h1>
  return (
    <div className={ss.wrapper}>
      <div className={ss.title} style={{ color: colors.modals.title }}>
        Отредактирвоать заявку
      </div>
      <form className={ss.formWrapper} onSubmit={(e) => sendInfo(e)}>
        <div className={ss.left}>
          <div className={ss.quantityPriceTotal} style={{ backgroundColor: colors.modals.blockBckg }}>
            <div className={ss.quantity}>
              <div>Количетсво</div>
              <input
                style={colors.modals.input}
                type="number"
                value={modifyInfo.quantity}
                onChange={(e) => setModifyInfo({ ...modifyInfo, quantity: parseInt(e.target.value) })} />
            </div>
            <div className={ss.price}>
              <div>Цена</div>
              <input
                style={colors.modals.input}
                type="number"
                value={modifyInfo.price}
                onChange={(e) => setModifyInfo({ ...modifyInfo, price: parseFloat(e.target.value) })} />
            </div>
            <div className={ss.totalSum}>
              <div>Итого</div>
              <input
                style={colors.modals.input}
                type="number"
                value={modifyInfo.totalSum}
                onChange={(e) => setModifyInfo({ ...modifyInfo, totalSum: parseFloat(e.target.value) })} />
            </div>
          </div>
          <div className={ss.accountTypeCountryCurrency} style={{ backgroundColor: colors.modals.blockBckg }}>
            <div className={ss.currency}>
              <div className={ss.label}>Валюта</div>
              <select
                style={colors.modals.input}
                onChange={(e) => setModifyInfo({ ...modifyInfo, currencyID: e.target.value })}>
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
              <div>Тип аккаунта</div>
              <select
                style={colors.modals.input}
                value={modifyInfo.accountType}
                onChange={(e) => setModifyInfo({ ...modifyInfo, accountType: e.target.value })}>
                {accountTypes?.map((at, index) => (
                  <option key={index} value={at._id}>{at.name}</option>
                ))}
              </select>
            </div>
            <div className={ss.country}>
              <div>Страна</div>
              <div>
                <select
                  style={colors.modals.input}
                  value={modifyInfo.location}
                  onChange={(e) => setModifyInfo({ ...modifyInfo, location: e.target.value })}>
                  {countries?.map((country, index) => (
                    <option key={index} value={country._id}>{country.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={ss.right}>
          <div className={ss.description}>
            <textarea
              style={colors.modals.input}
              placeholder="Описание.."
              value={modifyInfo.description}
              onChange={(e) => setModifyInfo({ ...modifyInfo, description: e.target.value })}
              cols="30" rows="5" />
          </div>
          <FileUpload
            oid={oid}
            setOid={setOid}
            closeCb={() => setEditOrderModalAction(false)}
            fileToBeUpload={fileToBeUpload}
            setFileToBeUpload={setFileToBeUpload} />
          <ModalBtn>
            Отправить
          </ModalBtn>
        </div>
      </form>
    </div>
  )
}