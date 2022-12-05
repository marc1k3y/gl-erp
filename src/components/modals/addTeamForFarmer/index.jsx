import ss from "./style.module.css"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUpdaterAction } from "../../../store/updater/actions"
import { setAddTeamForFarmerModalAction } from "../../../store/addTeamForFarmer/actions"
import { addTeamForFarmer } from "../../../http/actionBtns"
import { getDropdownTeams } from "../../../http/dropdownApi"
import { ModalBtn } from "../modalBtn"

export const AddTeamForFarmer = () => {
  const dispatch = useDispatch()
  const { farmerUiForRequest } = useSelector(state => state.addTeamForFarmer)
  const [teams, setTeams] = useState(null)
  const [currentNum, setCurrentNum] = useState("")

  useEffect(() => {
    getDropdownTeams(farmerUiForRequest)
      .then((res) => {
        setTeams(res)
        setCurrentNum(res[0].number.toString())
      })
  }, [farmerUiForRequest])

  function submitHandler(e) {
    e.preventDefault()
    addTeamForFarmer(farmerUiForRequest, currentNum)
      .then(() => {
        dispatch(setUpdaterAction())
        dispatch(setAddTeamForFarmerModalAction(false))
      })
  }

  return (
    <form className={ss.wrapper} onSubmit={(e) => submitHandler(e)}>
      <div>
        Команда
        <select value={currentNum} onChange={(e) => setCurrentNum(e.target.value)}>
          {teams && teams.map((teamNum, index) => (
            <option key={index}>
              {teamNum}
            </option>
          ))}
        </select>
      </div>
      <ModalBtn>
        Добавить
      </ModalBtn>
    </form>
  )
}