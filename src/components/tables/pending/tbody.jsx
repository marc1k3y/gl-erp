import ss from "./style.module.css"
import { converDate } from "../convertDate"
import { createUserIdentity } from "../../createUserIdentity"
import { EditOrderBtn } from "../buttons/editOrder"
import { StartBtn } from "../buttons/startBtn"
import { CancelBtn } from "../buttons/cancelBtn"
import { fileApi } from "../../../constants"
import { setTableRowColor } from "../setTableRowColor"

export const PendingTbody = ({ data, ui }) => {

  function showActions(id, link) {
    const roleID = parseInt(createUserIdentity().roleID)
    const canStart = [5, 6]
    const canCancel = [3, 4, 7]
    const canEdit = [2, 3, 4, 7]
    return (
      <div className={ss.actions}>
        {canEdit.includes(roleID) &&
          <EditOrderBtn orderId={id} />}
        {canStart.includes(roleID) &&
          <StartBtn orderId={id} ui={ui} />}
        {canCancel.includes(roleID) &&
          <CancelBtn orderId={id} />}
        {link && <a download href={link}>🔗</a>}
      </div>
    )
  }

  return (
    <tbody>
      {data && data.map((item, index) => (
        <tr key={index} style={{ backgroundColor: setTableRowColor(index) }}>
          <td>{index + 1}</td>
          <td>{converDate(item.dateCreated)}</td>
          <td>{item.quantity}</td>
          <td>{item.type.name}</td>
          <td>{item.location.iso}</td>
          <td>{item.farmer ? item.farmer.fullName : item.buyer.fullName}</td>
          <td>{item.description}</td>
          <td>{item.team.id}</td>
          <td>{showActions(item._id, fileApi + item.downloadLink)}</td>
        </tr>
      ))}
    </tbody>
  )
}