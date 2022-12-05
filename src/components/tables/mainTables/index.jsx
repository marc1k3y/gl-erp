import ss from "./style.module.css"
import { useState } from "react"
import { PeriodSelector } from "../../periodSelector"
import { TableSelector } from "../../tableSelector"
import { CompletedTable } from "../completed"
import { InWorkTable } from "../inWork"
import { PendingTable } from "../pending"
import { DeclinedTable } from "../declined"
import { OwnerTables } from "./ownerTables[unused]"

export const MainTables = ({ ui }) => {
  const [currentTable, setCurrentTable] = useState("all")

  function tableSwitchHandler() {
    switch (currentTable) {
      case "1":
        return <CompletedTable ui={ui} />
      case "2":
        return <InWorkTable ui={ui} />
      case "3":
        return <PendingTable ui={ui} />
      case "4":
        return <DeclinedTable ui={ui} />
      case "all":
        return <div className={ss.tables}>
          <CompletedTable ui={ui} />
          <InWorkTable ui={ui} />
          <PendingTable ui={ui} />
          <DeclinedTable ui={ui} />
        </div>
      default:
        break
    }
  }
  
  return (
    <div className={ss.wrapper}>
      <div className={ss.actions}>
        <TableSelector
          currentTable={currentTable}
          setCurrentTable={setCurrentTable} />
        <PeriodSelector />
        <OwnerTables />
      </div>
      {tableSwitchHandler()}
    </div>
  )
}