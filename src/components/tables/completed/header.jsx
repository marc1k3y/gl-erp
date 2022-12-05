import { colors } from "../../colors"
import ss from "./style.module.css"

export const CompletedHeader = () => {
  return (
    <div className={ss.header} style={{ color: colors.table.title }}>
      <div>
        Завершенные
      </div>
      {/* <div>collapse</div> */}
    </div>
  )
}