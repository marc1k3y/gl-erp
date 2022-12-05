import css from "./style.module.css"
import { useState } from "react"
import dropdownIco from "../../assets/dropdown.svg"
import dropupIco from "../../assets/dropup.svg"

export const TableDropdown = () => {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState("all")
  return (
    <div className={css.wrapper}>
      <div className={css.static}>
        <div className={css.current}>
          {current}
        </div>
        <div className={css.arrow}>
          <img src={visible ? dropupIco : dropdownIco} alt="dropdown-visible" />
        </div>
      </div>
      <div className={css.dynamic}></div>
    </div>
  )
}