import ss from "./style.module.css"
import startIco from "../../../../assets/start.svg"
import { useDispatch } from "react-redux"
import { sendStartStatus } from "../../../../http/actionBtns"
import { setUpdaterAction } from "../../../../store/updater/actions"

export const StartBtn = ({ orderId, ui }) => {
  const dispatch = useDispatch()

  function handler() {
    sendStartStatus(orderId, ui)
      .then(() => dispatch(setUpdaterAction()))
  }
  return (
    <button className={ss.wrapper} onClick={handler}>
      <img src={startIco} alt="start" />
    </button>
  )
}