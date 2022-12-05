import { useDispatch } from "react-redux"
import { setFarmerUiAction, setBuyerUiAction } from "../../../store/farmerBuyerTables/actions"
import { setTableRowColor } from "../setTableRowColor"

export const FarmerListTbody = ({ number, fullName, role, quantity, valids, price, ui }) => {
  const dispatch = useDispatch()

  function setUiForRole2Tables() {
    dispatch(setFarmerUiAction(ui))
    dispatch(setBuyerUiAction(null))
  }

  return (
    <tbody>
      <tr style={{ backgroundColor: setTableRowColor(number) }} onClick={setUiForRole2Tables}>
        <td>{number}</td>
        <td>{fullName}</td>
        <td>{role}</td>
        <td>{quantity}</td>
        <td>{valids}</td>
        <td>{price}</td>
      </tr>
    </tbody>
  )
}