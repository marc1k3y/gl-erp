import { useDispatch } from "react-redux"
import { setFarmerUiAction, setBuyerUiAction } from "../../../store/farmerBuyerTables/actions"
import { setTableRowColor } from "../setTableRowColor"
// import { createUserIdentity } from "../../createUserIdentity"

export const TeamListTbody = ({
  number,
  fullName,
  role,
  quantity,
  valids,
  total,
  // price,
  // buyerId,
  // roleId,
  uid
}) => {
  const dispatch = useDispatch()
  // const token = createUserIdentity().token
  // const buyerUi = { userID: buyerId.toString(), roleID: roleId.toString(), token }

  function setBuyerUserId() {
    dispatch(setBuyerUiAction(uid))
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
          {total}
        </td>
      </tr>
    </tbody>
  )
}