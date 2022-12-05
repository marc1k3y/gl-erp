import ss from "./style.module.css"
import { converDate } from "../convertDate"
import { EditOrderBtn } from "../buttons/editOrder"
import { createUserIdentity } from "../../createUserIdentity"
import { fileApi } from "../../../constants"
import { setTableRowColor } from "../setTableRowColor"

export const CompletedTbody = ({ data }) => {

  function showActions(id, link) {
    const roleId = parseInt(createUserIdentity().roleID)
    const canEdit = [2]
    return (
      <div className={ss.actions}>
        {canEdit.includes(roleId) && <EditOrderBtn orderId={id} />}
        {link && <a download href={link}>🔗</a>}
      </div>)
  }

  return (
    <tbody>
      {data && data.map((item, index) => (
        <tr key={index} style={{ backgroundColor: setTableRowColor(index) }}>
          <td>{index + 1}</td>
          <td>{converDate(item.dateCreated)}</td>
          <td>{converDate(item.dateFinished)}</td>
          <td>{item.accountRequest.quantity}</td>
          <td>{item.valid}</td>
          <td>{item.price}</td>
          <td>{item.totalSum}</td>
          <td>{item.currency.iso}</td>
          <td>{item.accountRequest.type.name}</td>
          <td>{item.accountRequest.location.name}</td>
          <td>{item.farmer ? item.farmer.name : item.buyer.name}</td>
          <td>{item.description}</td>
          <td>{item.team.number}</td>
          <td>{showActions(item._id, fileApi + item.downloadLink)}</td>
        </tr>
      ))}
    </tbody>
  )
}