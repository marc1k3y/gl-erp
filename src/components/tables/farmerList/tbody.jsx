import { useDispatch } from "react-redux"
import { setFarmerUiAction, setBuyerUiAction } from "../../../store/farmerBuyerTables/actions"
import { setTableRowColor } from "../setTableRowColor"

export const FarmerListTbody = ({ number, fullName, role, quantity, valids, price, uid, total }) => {
  const dispatch = useDispatch()

  function setUiForRole2Tables() {
    dispatch(setFarmerUiAction(uid))
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
        <td>{total}</td>
        {/* <td>{price}</td> */}
      </tr>
    </tbody>
  )
}