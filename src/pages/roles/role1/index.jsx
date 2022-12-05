import ss from "./style.module.css"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TeamleadListTable } from "../../../components/tables/teamleadList"
import { BuyerListTable } from "../../../components/tables/buyerList"
import { Modal } from "../../../components/UI/modal"
import { DenialReason } from "../../../components/modals/denialReason"
import { EditOrder } from "../../../components/modals/editOrder"
import { FarmerListTable } from "../../../components/tables/farmerList"
import { createUserIdentity } from "../../../components/createUserIdentity"
import { getBuyerListTable, getFarmerLeftListTable } from "../../../http/tablesApi"
import { setDenialReasonModalAction, setEditOrderModalAction } from "../../../store/modals/actions"
import { MainTables } from "../../../components/tables/mainTables"

export const Role1Page = () => {
  const dispatch = useDispatch()
  const ui = createUserIdentity()
  const [loading, setLoading] = useState(false)
  const [blData, setBlData] = useState(null)
  const [flData, setFlDdata] = useState(null)
  const [teamId, setTeamId] = useState(null)

  const { buyerUi, farmerUi } = useSelector(state => state.farmerBuyerTables)
  const { startDate, endDate } = useSelector(state => state.period)
  const { denialReasonModal, editOrderModal, orderIdForUpdate } = useSelector(state => state.modals)

  const period = { startDate, endDate }
  const request = { userID: teamId, token: ui.token }

  function setDenialModal(payload) {
    dispatch(setDenialReasonModalAction(payload))
  }

  function setEditOrderModal(payload) {
    dispatch(setEditOrderModalAction(payload))
  }

  useEffect(() => {
    setLoading(true)
    getBuyerListTable(period, request)
      .then((res) => setBlData(res))
    getFarmerLeftListTable(ui)
      .then((res) => setFlDdata(res))
      .finally(() => setLoading(false))
  }, [teamId])

  if (loading) return <h1>Loading..</h1>
  return (
    <div className={ss.wrapper}>
      <TeamleadListTable ui={ui} setTeamId={setTeamId} />
      <div className={ss.farmerBuyerLists}>
        <BuyerListTable data={blData} width="45%" />
        <FarmerListTable data={flData} width="45%" />
      </div>
      {buyerUi &&
        <MainTables ui={buyerUi} />}
      {farmerUi &&
        <MainTables ui={farmerUi} />}
      <Modal visible={denialReasonModal} setVisible={setDenialModal}>
        <DenialReason />
      </Modal>
      <Modal visible={editOrderModal} setVisible={setEditOrderModal}>
        {orderIdForUpdate && <EditOrder />}
      </Modal>
    </div>
  )
}