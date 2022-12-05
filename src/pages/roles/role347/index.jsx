import ss from "./style.module.css"
import { useSelector, useDispatch } from "react-redux"
import { CreateAccountRequest } from "../../../components/modals/createAccountRequest"
import { DenialReason } from "../../../components/modals/denialReason"
import { Modal } from "../../../components/UI/modal"
import { CloseOrder } from "../../../components/modals/closeOrder"
import { createUserIdentity } from "../../../components/createUserIdentity"
import { EditOrder } from "../../../components/modals/editOrder"
import { MainTables } from "../../../components/tables/mainTables"
import { setCloseOrderModalAction, setCreateAccountRequestModalAction, setDenialReasonModalAction, setEditOrderModalAction } from "../../../store/modals/actions"
import { colors } from "../../../components/colors"

export const Role347Page = () => {
  const dispatch = useDispatch()
  const ui = createUserIdentity()
  const { createAccountRequestModal, denialReasonModal, closeOrderModal, editOrderModal } = useSelector(state => state.modals)

  function setCreateAccountRequestModal(payload) {
    dispatch(setCreateAccountRequestModalAction(payload))
  }

  function setDenialReasonModal(payload) {
    dispatch(setDenialReasonModalAction(payload))
  }

  function setCloseOrderModal(paylaod) {
    dispatch(setCloseOrderModalAction(paylaod))
  }

  function setEditOrderModal(payload) {
    dispatch(setEditOrderModalAction(payload))
  }

  return (
    <div className={ss.wrapper}>
      <button
        className={ss.craBtn}
        style={{ backgroundColor: colors.button.bckg, color: colors.button.font }}
        onClick={() => setCreateAccountRequestModal(true)}>
        Создать заявку на аккаунт
      </button>
      <MainTables ui={ui} />
      <Modal visible={createAccountRequestModal} setVisible={setCreateAccountRequestModal}>
        <CreateAccountRequest />
      </Modal>
      <Modal visible={denialReasonModal} setVisible={setDenialReasonModal}>
        <DenialReason />
      </Modal>
      <Modal visible={closeOrderModal} setVisible={setCloseOrderModal}>
        <CloseOrder />
      </Modal>
      <Modal visible={editOrderModal} setVisible={setEditOrderModal}>
        <EditOrder />
      </Modal>
    </div >
  )
}