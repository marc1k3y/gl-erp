import { colors } from "../../colors"
import ss from "./style.module.css"

export const FarmerListHeader = () => {
  return (
    <div className={ss.header} style={{ color: colors.table.title }}>
      <div>
        Управление командами
      </div>
      {/* <div>collapse</div> */}
    </div>
  )
}