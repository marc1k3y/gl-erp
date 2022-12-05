import ss from "./style.module.css"
import doneIco from "../../../../assets/done.svg"
import { useDispatch } from "react-redux"
import { setCloseOrderId, setCloseOrderModalAction } from "../../../../store/modals/actions"

export const DoneBtn = ({ orderId }) => {
  const dispatch = useDispatch()

  function openCloseOrderModal() {
    dispatch(setCloseOrderModalAction(true))
    dispatch(setCloseOrderId(orderId))
  }
  return (
    <button className={ss.wrapper} onClick={openCloseOrderModal}>
      <img src={doneIco} alt="done" />
    </button>
  )
}