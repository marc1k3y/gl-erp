import ss from "./style.module.css"
import { useDispatch } from "react-redux"
import { setApproveModalAction } from "../../../store/modals/actions"
import { ModalBtn } from "../modalBtn"
import { colors } from "../../colors"

export const Approve = ({ approve, title }) => {
  const dispatch = useDispatch()

  function decline() {
    dispatch(setApproveModalAction(false))
  }

  return (
    <div className={ss.wrapper}>
      <div className={ss.title} style={{ color: colors.modals.title }}>
        {title}
      </div>
      <div className={ss.buttons}>
        <ModalBtn onClick={decline}>
          Нет
        </ModalBtn>
        <ModalBtn onClick={approve}>
          Да
        </ModalBtn>
      </div>
    </div>
  )
}