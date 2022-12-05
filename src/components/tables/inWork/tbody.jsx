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