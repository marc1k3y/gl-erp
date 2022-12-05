import { colors } from "../../colors"
import ss from "./style.module.css"

export const DeclinedHeader = () => {
  return (
    <div className={ss.header} style={{ color: colors.table.title }}>
      <div>
        Отмененные
      </div>
      {/* <div>collapse</div> */}
    </div>
  )
}