import ss from "./style.module.css"
import cancelIco from "../../../../assets/cancel.svg"

export const RemoveTeamBtn = ({ ...props }) => {
  return (
    <button className={ss.wrapper} {...props}>
      <img src={cancelIco} alt="cancel" />
    </button>
  )
}