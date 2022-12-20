import ss from "./style.module.css"
import { converDate } from "../convertDate"
import { EditOrderBtn } from "../buttons/editOrder"
import { createUserIdentity } from "../../createUserIdentity"
import { setTableRowColor } from "../setTableRowColor"

export const CompletedTbody = ({ data }) => {
  function showActions(id, link) {
    const roleId = parseInt(createUserIdentity().roleID)
    const canEdit = [1, 2]
    return (
      <div className={ss.actions}>
        {canEdit.includes(roleId) && <EditOrderBtn orderId={id} />}
        {link && <a download={link} href={link}>🔗</a>}
      </div>)
  }

  function setName(item) {
    if (item.farmer.fullName) {
      return item.farmer.fullName
    } else if (item.buyer.fullName) {
      return item.buyer.fullName
    } else if (item.team.teamlead.fullName) {
      return item.team.teamlead.fullName
    }
  }

  return (
    <tbody>
      {data && data.map((item, index) => (
        <tr key={index} style={{ backgroundColor: setTableRowColor(index) }}>
          <td>{index + 1}</td>
          <td>{converDate(item.dateCreated)}</td>
          <td>{converDate(item.dateCompleted)}</td>
          <td>{item.quantity}</td>
          <td>{item.valid}</td>
          <td>{item.price}</td>
          <td>{item.total}</td>
          <td>{item.currency.iso}</td>
          <td>{item.type.name}</td>
          <td>{item.location.iso}</td>
          <td>{setName(item)}</td>
          <td>{item.description}</td>
          <td>{item.team.id}</td>
          <td>{showActions(item._id, item.driveLink)}</td>
        </tr>
      ))}
    </tbody>
  )
}