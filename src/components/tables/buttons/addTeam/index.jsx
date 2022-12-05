import ss from "./style.module.css"
import addTeamIco from "../../../../assets/add-team.svg"

export const AddTeamBtn = ({ ...props }) => {
  return (
    <button className={ss.wrapper} {...props}>
      <img src={addTeamIco} alt="add-team" />
    </button>
  )
}