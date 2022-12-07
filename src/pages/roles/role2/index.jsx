import ss from "./style.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUserIdentity } from "../../../components/createUserIdentity"
import { BuyerListTable } from "../../../components/tables/buyerList"
import { getBuyerListTable } from "../../../http/tablesApi"
import { Modal } from "../../../components/UI/modal"
import { DenialReason } from "../../../components/modals/denialReason"
import { EditOrder } from "../../../components/modals/editOrder"
import { MainTables } from "../../../components/tables/mainTables"
import { CreateAccountRequest } from "../../../components/modals/createAccountRequest"
import { colors } from "../../../components/colors"
import { setBuyerUiAction } from "../../../store/farmerBuyerTables/actions"
import { setCreateAccountRequestModalAction, setDenialReasonModalAction, setEditOrderModalAction } from "../../../store/modals/actions"

export const Role2Page = () => {
  const dispatch = useDispatch()
  const ui = createUserIdentity()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showMy, setShowMy] = useState(true)

  const { buyerUi } = useSelector(state => state.farmerBuyerTables)
  const { condition } = useSelector(state => state.updater)
  const { createAccountRequestModal, denialReasonModal, editOrderModal } = useSelector(state => state.modals)
  const { startDate, endDate } = useSelector(state => state.period)

  const period = {
    startDate, endDate
  }

  function showTablesHandler() {
    dispatch(setBuyerUiAction(null))
    setShowMy(!showMy)
  }

  function showTables() {
    if (showMy) {
      return <MainTables ui={ui} />
    }
    return (
      <div className={ss.buyerTables}>
        {!buyerUi && <BuyerListTable data={data} />}
        {buyerUi && <MainTables ui={buyerUi ? buyerUi : ui} />}
      </div>
    )
  }

  function setCreateAccountRequestModal(payload) {
    dispatch(setCreateAccountRequestModalAction(payload))
  }

  function setDenialModal(payload) {
    dispatch(setDenialReasonModalAction(payload))
  }

  function setEditOrderModal(payload) {
    dispatch(setEditOrderModalAction(payload))
  }

  useEffect(() => {
    setLoading(true)
    getBuyerListTable(period)
      .then((res) => setData(res))
      .finally(() => setLoading(false))
  }, [condition, showMy])

  if (loading) return <h1>Loading..</h1>
  return (
    <div className={ss.wrapper}>
      <div className={ss.topButtons}>
        <button
          style={{ color: colors.button.font, backgroundColor: colors.button.bckg }}
          onClick={() => setCreateAccountRequestModal(true)}>
          Создать заявку на аккаунт
        </button>
        <button
          style={{ color: colors.button.font, backgroundColor: colors.button.bckg }}
          onClick={showTablesHandler}>
          {showMy ? "Показать список баеров" : "Мои таблицы"}
        </button>
      </div>
      {showTables()}
      <Modal visible={createAccountRequestModal} setVisible={setCreateAccountRequestModal}>
        <CreateAccountRequest />
      </Modal>
      <Modal visible={denialReasonModal} setVisible={setDenialModal}>
        <DenialReason />
      </Modal>
      <Modal visible={editOrderModal} setVisible={setEditOrderModal}>
        <EditOrder />
      </Modal>
    </div>
  )
}