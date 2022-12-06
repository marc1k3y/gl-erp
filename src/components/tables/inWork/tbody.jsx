import ss from "./style.module.css"
import { DoneBtn } from "../buttons/doneBtn"
import { converDate } from "../convertDate"
import { CancelBtn } from "../buttons/cancelBtn"
import { createUserIdentity } from "../../createUserIdentity"
import { fileApi } from "../../../constants"
import { setTableRowColor } from "../setTableRowColor"

export const InWorkTbody = ({ data }) => {

  function showActions(id, link) {
    const roleId = parseInt(createUserIdentity().roleID)
    const canClose = [5, 6]
    return (
      <div className={ss.actions}>
        {canClose.includes(roleId) &&
          <DoneBtn orderId={id} />}
        <CancelBtn orderId={id} />
        {link && <a download={link} href={fileApi + link}>🔗</a>}
      </div>
    )
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
          <td>{item.quantity}</td>
          <td>{item.type.name}</td>
          <td>{item.location.iso}</td>
          <td>{setName(item)}</td>
          <td>{item.description}</td>
          <td>{item.team.id}</td>
          <td>{showActions(item._id, item.fileName)}</td>
        </tr>
      ))}
    </tbody>
  )
}