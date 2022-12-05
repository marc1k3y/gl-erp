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
import { MyButton } from "../../../components/UI/button"
import { colors } from "../../../components/colors"

export const Role5Page = () => {
  const dispatch = useDispatch()
  const ui = createUserIdentity()

  const [showMy, setShowMy] = useState(true)
  const [loading, setLoading] = useState(false)
  const [dataLeft, setDataLeft] = useState(null)
  const [dataRight, setDataRight] = useState(null)
  const { condition } = useSelector(state => state.updater)
  const { farmerUi } = useSelector(state => state.farmerBuyerTables)
  const { denialReasonModal, closeOrderModal } = useSelector(state => state.modals)
  const { addTeamModal } = useSelector(state => state.addTeamForFarmer)

  function showTables() {
    if (showMy) return <MainTables ui={ui} />
    return (
      <div className={ss.manageTables}>
        <div className={ss.topTables}>
          <FarmerListTable data={dataLeft} />
          <ManageTeamsTable data={dataRight} />
        </div>
        {farmerUi &&
          <MainTables ui={farmerUi} />}
      </div>
    )
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
    setLoading(true)
    getFarmerListTable(ui)
      .then((res) => setDataLeft(res))
      .finally(() => setLoading(false))
    getManageTeamsTable(ui)
      .then((res) => {
        console.log(res)
        setDataRight(res)
      })
      .finally(() => setLoading(false))
  }, [condition])

  if (loading) return <h1>Loading..</h1>
  return (
    <div className={ss.wrapper}>
      <button
        style={{ color: colors.button.font, backgroundColor: colors.button.bckg }}
        onClick={() => setShowMy(!showMy)}>
        {showMy ? "Показать списки" : "Мои таблицы"}
      </button>
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