import ss from "./style.module.css"
import { useSelector, useDispatch } from "react-redux"
import { DenialReason } from "../../../components/modals/denialReason"
import { Modal } from "../../../components/UI/modal"
import { CloseOrder } from "../../../components/modals/closeOrder"
import { createUserIdentity } from "../../../components/createUserIdentity"
import { setCloseOrderModalAction, setDenialReasonModalAction } from "../../../store/modals/actions"
import { MainTables } from "../../../components/tables/mainTables"

export const Role6Page = () => {
    const dispatch = useDispatch()
    const ui = createUserIdentity()
    const { denialReasonModal, closeOrderModal } = useSelector(state => state.modals)

    function setDenialModal(payload) {
        dispatch(setDenialReasonModalAction(payload))
    }

    function setCloseOrderModal(paylaod) {
        dispatch(setCloseOrderModalAction(paylaod))
    }

    return (
        <div className={ss.wrapper}>
            <MainTables ui={ui} />
            <Modal visible={denialReasonModal} setVisible={setDenialModal}>
                <DenialReason />
            </Modal>
            <Modal visible={closeOrderModal} setVisible={setCloseOrderModal}>
                <CloseOrder />
            </Modal>
        </div >
    )
}