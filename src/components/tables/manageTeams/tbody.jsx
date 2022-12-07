import ss from "./style.module.css"
import { useDispatch } from "react-redux"
import { AddTeamBtn } from "../buttons/addTeam"
import { RemoveTeamBtn } from "../buttons/removeTeam"
import { setTableRowColor } from "../setTableRowColor"
import { setAddTeamForFarmerModalAction, setFarmerUiForRequestAction } from "../../../store/addTeamForFarmer/actions"
import { removeTeamForFarmer } from "../../../http/actionBtns"
import { setUpdaterAction } from "../../../store/updater/actions"
import { addAllAccessTeamManage, revokeAllAccessTeamManage } from "../../../http/tablesApi"

export const ManageTeamsTbody = ({ number, fullName, teamsForWork, farmer }) => {
  const dispatch = useDispatch()

  function openAddTeamModal() {
    dispatch(setFarmerUiForRequestAction(farmer))
    dispatch(setAddTeamForFarmerModalAction(true))
  }

  function removeHandler(value) {
    removeTeamForFarmer(farmer, value)
      .then(() => dispatch(setUpdaterAction()))
  }

  function addAllAccessHandler() {
    addAllAccessTeamManage(farmer)
      .then(() => dispatch(setUpdaterAction()))
      .catch((e) => console.log(e.message))
  }

  function revokeAllAccessHandler() {
    revokeAllAccessTeamManage(farmer)
      .then(() => dispatch(setUpdaterAction()))
      .catch((e) => console.log(e.message))
  }

  return (
    <tbody>
      <tr style={{ backgroundColor: setTableRowColor(number) }}>
        <td>{number}</td>
        <td>
          {fullName} <AddTeamBtn onClick={openAddTeamModal} />
        </td>
        <td>
          <div className={ss.teamsForWork}>
            {teamsForWork && teamsForWork.map((tfw, index) => (
              <div className={ss.teamNumber} key={index}>
                <RemoveTeamBtn onClick={() => removeHandler(tfw)} />
                {tfw}
              </div>
            ))}
          </div>
        </td>
        <td className={ss.actions}>
          <button onClick={addAllAccessHandler}>Добавить все</button>
          <button onClick={revokeAllAccessHandler}>Удалить все</button>
        </td>
      </tr>
    </tbody>
  )
}