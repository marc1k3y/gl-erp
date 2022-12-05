import { colors } from "../../colors"
import ss from "./style.module.css"

export const TeamleadListHeader = () => {
  return (
    <div className={ss.header} style={{ color: colors.table.title }}>
      <div>
        Список тимлидов
      </div>
      {/* <div>collapse</div> */}
    </div>
  )
}