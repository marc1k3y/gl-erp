import ss from "./style.module.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "../../UI/modal"
import { converDate } from "../convertDate"
import { Approve } from "../../modals/approve"
import { ReturnBtn } from "../buttons/returnBtn"
import { returnFromDeclined } from "../../../http/actionBtns"
import { setUpdaterAction } from "../../../store/updater/actions"
import { setApproveModalAction } from "../../../store/modals/actions"
import { fileApi } from "../../../constants"
import { setTableRowColor } from "../setTableRowColor"

export const DeclinedTbody = ({ data, ui }) => {
  const dispatch = useDispatch()
  const { approveModal } = useSelector(state => state.modals)
  const [orderId, setOrderId] = useState(null)

  function setApproveModal(payload) {
    dispatch(setApproveModalAction(payload))
  }

  function returnBtnHandler() {
    setApproveModal(true)
  }

  function approve() {
    returnFromDeclined(orderId, ui)
      .then(() => {
        dispatch(setApproveModalAction(false))
        dispatch(setUpdaterAction())
      })
      .catch((e) => console.log(e.message))
  }

  function showActions(id, link) {
    !orderId && setOrderId(id)
    return (
      <div className={ss.actions}>
        <ReturnBtn onClick={returnBtnHandler} />
        {link && <a download href={link}>🔗</a>}
      </div>)
  }

  return (
    <tbody>
      {data && data.map((item, index) => (
        <tr key={index} style={{ backgroundColor: setTableRowColor(index) }}>
          <td>{index + 1}</td>
          <td>{converDate(item.dateCreated)}</td>
          <td>{converDate(item.dateCancelled)}</td>
          <td>{item.type.name}</td>
          <td>{item.location.iso}</td>
          <td>{item.cancelledBy.fullName}</td>
          <td>{item.cancellationCause}</td>
          <td>{showActions(item._id, fileApi + item.downloadLink)}</td>
          <Modal visible={approveModal} setVisible={setApproveModal}>
            <Approve approve={approve} title="Подтвердить возврат?" />
          </Modal>
        </tr>
      ))}
    </tbody>
  )
}