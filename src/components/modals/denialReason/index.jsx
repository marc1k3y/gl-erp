import ss from "./style.module.css"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setUpdaterAction } from "../../../store/updater/actions"
import { sendCancelReason } from "../../../http/modalsApi"
import { setApproveCancelOrderAction, setApproveModalAction, setDenialReasonModalAction } from "../../../store/modals/actions"
import { Modal } from "../../UI/modal"
import { Approve } from "../approve"
import { colors } from "../../colors"
import { ModalBtn } from "../modalBtn"

export const DenialReason = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("")
  const { denialReasonId, approveModal, approveCancelOrder } = useSelector(state => state.modals)

  function sendRequestHandler() {
    sendCancelReason(denialReasonId, message)
      .then(() => {
        dispatch(setApproveModalAction(false))
        dispatch(setDenialReasonModalAction(false))
      })
      .finally(() => dispatch(setUpdaterAction()))
  }

  function approve() {
    dispatch(setApproveCancelOrderAction(true))
  }

  function setApproveCancelModal(payload) {
    dispatch(setApproveModalAction(payload))
  }

  function onSubmitHandler() {
    dispatch(setApproveModalAction(true))
  }

  useEffect(() => {
    if (approveCancelOrder) {
      sendRequestHandler()
      dispatch(setApproveCancelOrderAction(false))
    }
  }, [approveCancelOrder])

  return (
    <div
      onSubmit={(e) => onSubmitHandler(e)}
      className={ss.wrapper}>
      <div
        style={{ color: colors.modals.title }}
        className={ss.title}>
        Причина отказа
      </div>
      <textarea
        style={colors.modals.input}
        onChange={(e) => setMessage(e.target.value)}
        cols="30"
        rows="10" />
      <ModalBtn onClick={onSubmitHandler}>
        Отправить
      </ModalBtn>
      <Modal visible={approveModal} setVisible={setApproveCancelModal}>
        <Approve approve={approve} title="Подтвердить отмену?" />
      </Modal>
    </div>
  )
}