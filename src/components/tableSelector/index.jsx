import ss from "./style.module.css"
import { useSelector } from "react-redux"
import { colors } from "../colors"

export const TableSelector = ({ currentTable, setCurrentTable }) => {
  const { completed, inWork, declined, pending } = useSelector(state => state.tablesVisible)
  return (
    <select
      style={{ backgroundColor: colors.tableSelector.bckg }}
      className={ss.wrapper}
      value={currentTable}
      onChange={(e) => setCurrentTable(e.target.value)}>
      {completed && <option value={1}>Завершенные</option>}
      {inWork && <option value={2}>В работе</option>}
      {pending && <option value={3}>В ожидании</option>}
      {declined && <option value={4}>Отменённые</option>}
      <option
        value={"all"}>Показать все</option>
    </select>
  )
}