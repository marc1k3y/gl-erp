import { useDispatch } from "react-redux"
import { setFarmerUiAction, setBuyerUiAction } from "../../../store/farmerBuyerTables/actions"
import { createUserIdentity } from "../../createUserIdentity"
import { setTableRowColor } from "../setTableRowColor"

export const TeamListTbody = ({
  number,
  fullName,
  role,
  quantity,
  valids,
  price,
  buyerId,
  roleId
}) => {
  const dispatch = useDispatch()
  const token = createUserIdentity().token
  const buyerUi = { userID: buyerId.toString(), roleID: roleId.toString(), token }

  function setBuyerUserId() {
    dispatch(setBuyerUiAction(buyerUi))
    dispatch(setFarmerUiAction(null))
  }
  return (
    <tbody>
      <tr style={{ backgroundColor: setTableRowColor(number) }} onClick={setBuyerUserId}>
        <td>
          {number}
        </td>
        <td>
          {fullName}
        </td>
        <td>
          {role}
        </td>
        <td>
          {quantity}
        </td>
        <td>
          {valids}
        </td>
        <td>
          {price}
        </td>
      </tr>
    </tbody>
  )
}