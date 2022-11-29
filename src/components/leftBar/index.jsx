import css from "./style.module.css"
import logo from "../../assets/logo.png"
import { appList } from "./apps"

export const LeftBar = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.logo}>
        <img src={logo} alt="brand-logo" />
      </div>
      {appList.map(app => (
        <div key={app.id} className={css.appItem}>
          <div className={css.appIcon}>
            <img src={app.img} alt="app-name" />
          </div>
          <div className={css.appTitle}>
            {app.title}
          </div>
        </div>
      ))}
    </div>
  )
}