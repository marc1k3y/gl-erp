import ss from "./style.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUserIdentity } from "../../../components/createUserIdentity"
import { ManageTeamsTable } from "../../../components/tables/manageTeams"
import { getFarmerListTable, getManageTeamsTable } from "../../../http/tablesApi"
import { Modal } from "../../../components/UI/modal"
import { DenialReason } from "../../../components/modals/denialReason"
import { CloseOrder } from "../../../components/modals/closeOrder"
import { AddTeamForFarmer } from "../../../components/modals/addTeamForFarmer"
import { setAddTeamForFarmerModalAction } from "../../../store/addTeamForFarmer/actions"
import { setCloseOrderModalAction, setDenialReasonModalAction } from "../../../store/modals/actions"
import { MainTables } from "../../../components/tables/mainTables"
import { FarmerListTable } from "../../../components/tables/farmerList"
import { colors } from "../../../components/colors"
import { setFarmerUiAction } from "../../../store/farmerBuyerTables/actions"

export const Role5Page = () => {
  const dispatch = useDispatch()
  const ui = createUserIdentity()

  const [myTables, setMyTables] = useState(true)
  const [teamManage, setTeamManage] = useState(false)
  const [currentTable, setCurrentTable] = useState(0)

  const [loading, setLoading] = useState(false)
  const [farmerData, setFarmerData] = useState(null)
  const [teamManageData, setTeamManageData] = useState(null)
  const { condition } = useSelector(state => state.updater)
  const { farmerUi } = useSelector(state => state.farmerBuyerTables)
  const { denialReasonModal, closeOrderModal } = useSelector(state => state.modals)
  const { addTeamModal } = useSelector(state => state.addTeamForFarmer)

  function showTables() {
    switch (currentTable) {
      case 0:
        return <div className={ss.tables}>
          <FarmerListTable data={farmerData} />
          {farmerUi && <MainTables ui={farmerUi} />}
        </div>
      case 1:
        return <ManageTeamsTable data={teamManageData} />
      case 2:
        return <MainTables ui={ui} />
    }
  }

  function setDenialModal(payload) {
    dispatch(setDenialReasonModalAction(payload))
  }

  function setCloseOrderModal(paylaod) {
    dispatch(setCloseOrderModalAction(paylaod))
  }

  function setAddTeamModal(payload) {
    dispatch(setAddTeamForFarmerModalAction(payload))
  }

  useEffect(() => {
    currentTable === 2 && dispatch(setFarmerUiAction(null))
  }, [currentTable])

  useEffect(() => {
    setLoading(true)
    getFarmerListTable()
      .then((res) => setFarmerData(res))
      .finally(() => setLoading(false))
    getManageTeamsTable(ui)
      .then((res) => setTeamManageData(res))
      .finally(() => setLoading(false))
  }, [condition])

  if (loading) return <h1>Loading..</h1>
  return (
    <div className={ss.wrapper}>
      <div className={ss.buttons}>
        <button
          style={{ color: colors.button.font, backgroundColor: colors.button.bckg }}
          onClick={() => setCurrentTable(2)}>
          Мои таблицы
        </button>
        <button
          style={{ color: colors.button.font, backgroundColor: colors.button.bckg }}
          onClick={() => setCurrentTable(1)}>
          Управление командами
        </button>
        <button
          style={{ color: colors.button.font, backgroundColor: colors.button.bckg }}
          onClick={() => setCurrentTable(0)}>
          Список фармеров
        </button>
      </div>
      {showTables()}
      <Modal visible={denialReasonModal} setVisible={setDenialModal}>
        <DenialReason />
      </Modal>
      <Modal visible={closeOrderModal} setVisible={setCloseOrderModal}>
        <CloseOrder />
      </Modal>
      <Modal visible={addTeamModal} setVisible={setAddTeamModal}>
        <AddTeamForFarmer />
      </Modal>
    </div>
  )
}