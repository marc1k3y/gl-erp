import ss from "./style.module.css"
import { useDispatch } from "react-redux"
import { AddTeamBtn } from "../buttons/addTeam"
import { RemoveTeamBtn } from "../buttons/removeTeam"
import { setTableRowColor } from "../setTableRowColor"
import { createUserIdentity } from "../../createUserIdentity"
import { setAddTeamForFarmerModalAction, setFarmerUiForRequestAction } from "../../../store/addTeamForFarmer/actions"
import { removeTeamForFarmer } from "../../../http/actionBtns"
import { setUpdaterAction } from "../../../store/updater/actions"

export const ManageTeamsTbody = ({ number, fullName, teamsForWork, userId }) => {
  const dispatch = useDispatch()
  const ui = createUserIdentity()
  const farmerUi = { userID: userId.toString(), token: ui.token }

  function openAddTeamModal() {
    dispatch(setFarmerUiForRequestAction(farmerUi))
    dispatch(setAddTeamForFarmerModalAction(true))
  }

  function removeHandler(value) {
    console.log(value);
    removeTeamForFarmer(farmerUi, value)
      .then((res) => {
        console.log(res);
        dispatch(setUpdaterAction())
      })
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
      </tr>
    </tbody>
  )
}