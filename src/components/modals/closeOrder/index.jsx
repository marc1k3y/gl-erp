import ss from "./style.module.css"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUpdaterAction } from "../../../store/updater/actions"
import { sendCloseOrder } from "../../../http/modalsApi"
import { setApproveCancelOrderAction, setApproveModalAction, setCloseOrderModalAction } from "../../../store/modals/actions"
import { getOrderById } from "../../../http/actionBtns"
import { Approve } from "../approve"
import { Modal } from "../../UI/modal"
import { FileUpload } from "../../fileUpload"
import { getCurrencies } from "../../../http/dropdownApi"
import { colors } from "../../colors"
import { ModalBtn } from "../modalBtn"

export const CloseOrder = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [oid, setOid] = useState(null)
  const [fileToBeUpload, setFileToBeUpload] = useState(null)
  const [currencies, setCurrencies] = useState(null)
  const { closeOrderId, approveModal, approveCancelOrder } = useSelector(state => state.modals)

  const [closeOrderInfo, setCloseOrderInfo] = useState({
    accountType: "",
    location: "",
    buyer: "",
    team: "",
    valid: 0,
    quantity: "",
    price: 0,
    totalSum: 0,
    description: "",
    currencyID: ""
  })

  function checkValidCount(e) {
    let value = parseInt(e.target.value)
    if (value > closeOrderInfo.quantity) value = closeOrderInfo.quantity
    setCloseOrderInfo({ ...closeOrderInfo, valid: value })
  }

  function submitHandler() {
    dispatch(setApproveModalAction(true))
  }

  function setApproveCancelModal(payload) {
    dispatch(setApproveModalAction(payload))
  }

  function approve() {
    dispatch(setApproveCancelOrderAction(true))
  }

  function sendCloseOrderInfo() {
    sendCloseOrder(closeOrderId, closeOrderInfo.currencyID, closeOrderInfo.price, closeOrderInfo.valid)
      .then(() => {
        if (fileToBeUpload) setOid(closeOrderId)
        else {
          dispatch(setApproveModalAction(false))
          dispatch(setCloseOrderModalAction(false))
        }
      })
      .finally(() => setUpdaterAction())
  }

  useEffect(() => {
    setCloseOrderInfo({ ...closeOrderInfo, totalSum: closeOrderInfo.price * closeOrderInfo.quantity })
  }, [closeOrderInfo.price, closeOrderInfo.quantity])

  useEffect(() => {
    setCloseOrderInfo({ ...closeOrderInfo, price: closeOrderInfo.totalSum / closeOrderInfo.quantity })
  }, [closeOrderInfo.totalSum])

  useEffect(() => {
    if (approveCancelOrder) {
      sendCloseOrderInfo()
      dispatch(setApproveCancelOrderAction(false))
    }
  }, [approveCancelOrder])

  useEffect(() => {
    setLoading(true)
    closeOrderId && getOrderById(closeOrderId)
      .then((res) => {
        console.log(res)
        setCloseOrderInfo({
          accountType: res.type.name,
          location: res.location.name,
          buyer: res.buyer.fullName,
          team: res.team.id,
          valid: res.valid,
          quantity: res.quantity,
          price: res.price,
          description: res.description,
        })
      })
    getCurrencies()
      .then((res) => {
        console.log(res);
        setCurrencies(res)})
      .finally(() => setLoading(false))
  }, [closeOrderId])

  if (loading) return <h1>Loading..</h1>
  return (
    <div className={ss.wrapper}>
      <div className={ss.title} style={{ color: colors.modals.title }}>
        Закрыть заказ
      </div>
      <div className={ss.dataWrapper}>
        <div className={ss.left} style={{ backgroundColor: colors.modals.blockBckg, color: colors.modals.blockFont }}>
          <div className={ss.accountType}>
            <div>
              {`Тип аккаунта: ${closeOrderInfo.accountType}`}
            </div>
          </div>
          <div className={ss.country}>
            <div>
              {`Страна: ${closeOrderInfo.location}`}
            </div>
          </div>
          <div className={ss.buyer}>
            <div>
              {`Баер: ${closeOrderInfo.buyer}`}
            </div>
          </div>
          <div className={ss.team}>
            <div>
              {`Команда: ${closeOrderInfo.team}`}
            </div>
          </div>
          <div className={ss.quantity}>
            <div>
              {`Количество: ${closeOrderInfo.quantity}`}
            </div>
          </div>
        </div>
        <div className={ss.right} style={{ backgroundColor: colors.modals.blockBckg, color: colors.modals.blockFont }}>
          <div className={ss.valids}>
            <div>
              Валидных
            </div>
            <div>
              <input
                style={colors.modals.input}
                type="number"
                value={closeOrderInfo.valid}
                onChange={(e) => checkValidCount(e)} />
            </div>
          </div>
          <div className={ss.price}>
            <div>
              Стоимость шт
            </div>
            <div>
              <input
                style={colors.modals.input}
                type="number"
                value={closeOrderInfo.price}
                onChange={(e) => setCloseOrderInfo({ ...closeOrderInfo, price: parseFloat(e.target.value) })} />
            </div>
          </div>
          <div className={ss.total}>
            <div>
              Итого
            </div>
            <div>
              <input
                style={colors.modals.input}
                type="number"
                value={closeOrderInfo.totalSum}
                onChange={(e) => setCloseOrderInfo({ ...closeOrderInfo, totalSum: parseFloat(e.target.value) })} />
            </div>
          </div>
          <div className={ss.description}>
            <div>
              Описание
            </div>
            <div>
              <input
                style={colors.modals.input}
                type="text"
                value={closeOrderInfo.description}
                onChange={(e) => setCloseOrderInfo({ ...closeOrderInfo, description: e.target.value })} />
            </div>
          </div>
          <div className={ss.currency}>
            <div>Валюта</div>
            <select
              onChange={(e) => setCloseOrderInfo({ ...closeOrderInfo, currencyID: e.target.value })}>
              {currencies && currencies.map(currency => (
                <option
                  key={currency._id}
                  value={currency._id}>
                  {currency.iso}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <FileUpload
        oid={oid}
        setOid={setOid}
        closeCb={() => setCloseOrderModalAction(false)}
        fileToBeUpload={fileToBeUpload}
        setFileToBeUpload={setFileToBeUpload} />
      <ModalBtn onClick={submitHandler}>
        Отправить
      </ModalBtn>
      <Modal visible={approveModal} setVisible={setApproveCancelModal}>
        <Approve approve={approve} title="Подтвердить завершение?" />
      </Modal>
    </div>
  )
}