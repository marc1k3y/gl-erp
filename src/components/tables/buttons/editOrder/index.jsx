import ss from "./style.module.css"
import editIco from "../../../../assets/edit.svg"
import { useDispatch } from "react-redux"
import { setEditOrderModalAction, setOrderIdForUpdateAction } from "../../../../store/modals/actions"

export const EditOrderBtn = ({ orderId }) => {
  const dispatch = useDispatch()

  function openEditOrderModal() {
    dispatch(setOrderIdForUpdateAction(orderId))
    dispatch(setEditOrderModalAction(true))
  }
  return (
    <button className={ss.wrapper} onClick={openEditOrderModal}>
      <img src={editIco} alt="edit" />
    </button>
  )
}