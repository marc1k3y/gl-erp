import ss from "./style.module.css"
import logoIco from "../../assets/logo.png"
import { createUserIdentity } from "../createUserIdentity"
import { colors } from "../colors"

export const Header = () => {
  const username = createUserIdentity().username
  return (
    <div className={ss.wrapper}>
      <div className={ss.logo}>
        <img src={logoIco} alt="gl_erp" />
      </div>
      <div className={ss.navbar}>
        <div>
          {username}
        </div>
        <a href="https://g-front-test.azurewebsites.net/" style={{ backgroundColor: colors.button.bckg, color: colors.button.font }}>
          Назад
        </a>
      </div>
    </div>
  )
}