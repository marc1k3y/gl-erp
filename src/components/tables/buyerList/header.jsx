import { colors } from "../../colors"
import ss from "./style.module.css"

export const TeamListHeader = () => {
  return (
    <div className={ss.header} style={{ color: colors.table.title }}>
      <div>
        Список баеров
      </div>
      {/* <div>collapse</div> */}
    </div>
  )
}