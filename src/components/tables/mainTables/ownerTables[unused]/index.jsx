import css from "./style.module.css"
import { useState } from "react"
import { BuyerListTable } from "../../buyerList"
import { FarmerListTable } from "../../farmerList"
import { TeamleadListTable } from "../../teamleadList"
import { colors } from "../../../colors"

export const OwnerTables = () => {
  const [visible, setVisible] = useState(false)
  const [currentTable, setCurrentTable] = useState(1)

  function TableSwitchHandler() {
    switch (currentTable) {
      case 1:
        return <TeamleadListTable />
      case 2:
        return <BuyerListTable />
      case 3:
        return <FarmerListTable />
      default:
        return <TeamleadListTable />
    }
  }
  return (
    <div className={css.wrapper} style={{ color: visible ? colors.showBtn.activeFont : colors.showBtn.waitingFont, backgroundColor: visible ? colors.showBtn.activeOutline : colors.showBtn.waitingOutline }}>
      <div className={css.visibleButton} style={{ backgroundColor: visible ? colors.showBtn.activeBckg : colors.showBtn.waitingBckg }}>
        <div onClick={() => setVisible(!visible)}>
          {visible ? "Скрыть таблицы" : "Показать таблицы"}
        </div>
      </div>
      {visible &&
        <div style={{ display: "none" }}>

        </div>}
    </div>
  )
}