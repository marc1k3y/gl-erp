import ss from "./style.module.css"
import logoIco from "../../assets/logo.png"
import { createUserIdentity } from "../createUserIdentity"
import { colors } from "../colors"
import { useDispatch } from "react-redux"
import { logoutAction } from "../../store/auth/actions"

export const Header = () => {
  const dispatch = useDispatch()
  const username = createUserIdentity().username

  function logout() {
    dispatch(logoutAction())
    localStorage.removeItem("token")
  }
  return (
    <div className={ss.wrapper}>
      <div className={ss.logo}>
        <img onClick={logout} src={logoIco} alt="gl_erp" />
      </div>
      <div className={ss.navbar}>
        <div>
          {username}
        </div>
        <a href="https://g-front.azurewebsites.net/" style={{ backgroundColor: colors.button.bckg, color: colors.button.font }}>
          Назад
        </a>
      </div>
    </div>
  )
}