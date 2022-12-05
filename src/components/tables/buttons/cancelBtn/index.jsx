import ss from "./style.module.css"
import { useDispatch } from "react-redux"
import cancelIco from "../../../../assets/cancel.svg"
import { setDenialReasonIdAction, setDenialReasonModalAction } from "../../../../store/modals/actions"

export const CancelBtn = ({ orderId }) => {
  const dispatch = useDispatch()

  function openDenialModal() {
    dispatch(setDenialReasonModalAction(true))
    dispatch(setDenialReasonIdAction(orderId))
  }

  return (
    <button className={ss.wrapper} onClick={openDenialModal}>
      <img src={cancelIco} alt="cancel-btn" />
    </button>
  )
}