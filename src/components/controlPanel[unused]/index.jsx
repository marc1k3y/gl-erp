import ss from "./style.module.css"
import { setCreateAccountRequestModalAction } from "../../store/modals/actions"
import { useDispatch } from "react-redux"
import { logoutAction } from "../../store/auth/actions"

export const ControlPanel = () => {
  const dispatch = useDispatch()

  function logout() {
      dispatch(logoutAction())
  }

  function setCreateAccountRequestModal(payload) {
    dispatch(setCreateAccountRequestModalAction(payload))
  }
  return (
    <div className={ss.wrapper}>
      <button onClick={() => setCreateAccountRequestModal(true)}>
        Создать заявку
      </button>
      <button onClick={logout}>
        Выйти
      </button>
    </div>
  )
}