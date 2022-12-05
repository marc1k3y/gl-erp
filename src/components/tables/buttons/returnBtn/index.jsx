import ss from "./style.module.css"
import returnIco from "../../../../assets/return.svg"

export const ReturnBtn = ({ ...props }) => {
  return (
    <button className={ss.wrapper} {...props}>
      <img src={returnIco} alt="return" />
    </button>
  )
}