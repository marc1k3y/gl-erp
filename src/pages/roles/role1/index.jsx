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
import { getBuyerListTable, getFarmerListTable } from "../../../http/tablesApi"
import { setDenialReasonModalAction, setEditOrderModalAction } from "../../../store/modals/actions"
import { MainTables } from "../../../components/tables/mainTables"
import { colors } from "../../../components/colors"
import { setFarmerUiAction } from "../../../store/farmerBuyerTables/actions"

export const Role1Page = () => {
  const dispatch = useDispatch()
  const ui = createUserIdentity()

  const [currentTable, setCurrentTable] = useState(0)
  const [loading, setLoading] = useState(false)
  const [blData, setBlData] = useState(null)
  const [flData, setFlDdata] = useState(null)
  const [teamleadId, setTeamleadId] = useState(null)

  const { buyerUi, farmerUi } = useSelector(state => state.farmerBuyerTables)
  const { startDate, endDate } = useSelector(state => state.period)
  const { denialReasonModal, editOrderModal, orderIdForUpdate } = useSelector(state => state.modals)

  const period = { startDate, endDate }

  function showTables() {
    switch (currentTable) {
      case 0:
        return <TeamleadListTable ui={ui} setTeamleadId={setTeamleadId} />
      case 1:
        return <div className={ss.roleTables}>
          <FarmerListTable data={flData} />
          {farmerUi && <MainTables ui={farmerUi} />}
        </div>
      case 2:
        return <div className={ss.roleTables}>
          <BuyerListTable data={blData} />
          {buyerUi && <MainTables ui={buyerUi} />}
        </div>
      default:
        return <TeamleadListTable ui={ui} setTeamleadId={setTeamleadId} />
    }
  }

  function setDenialModal(payload) {
    dispatch(setDenialReasonModalAction(payload))
  }

  function setEditOrderModal(payload) {
    dispatch(setEditOrderModalAction(payload))
  }

  useEffect(() => {
    setLoading(true)
    getBuyerListTable(period, teamleadId)
      .then((res) => setBlData(res))
    getFarmerListTable(ui)
      .then((res) => setFlDdata(res))
      .finally(() => setLoading(false))
  }, [teamleadId])

  if (loading) return <h1>Loading..</h1>
  return (
    <div className={ss.wrapper}>
      <div className={ss.buttons}>
        <button
          style={{ color: colors.button.font, backgroundColor: colors.button.bckg }}
          onClick={() => setCurrentTable(0)}>
          Список тимлидов
        </button>
        {teamleadId && <button
          style={{ color: colors.button.font, backgroundColor: colors.button.bckg }}
          onClick={() => setCurrentTable(2)}>
          Список баеров
        </button>}
        <button
          style={{ color: colors.button.font, backgroundColor: colors.button.bckg }}
          onClick={() => {
            dispatch(setFarmerUiAction(null))
            setCurrentTable(1)
          }}>
          Список фармеров
        </button>
      </div>
      {showTables()}
      <Modal visible={denialReasonModal} setVisible={setDenialModal}>
        <DenialReason />
      </Modal>
      <Modal visible={editOrderModal} setVisible={setEditOrderModal}>
        {orderIdForUpdate && <EditOrder />}
      </Modal>
    </div>
  )
}