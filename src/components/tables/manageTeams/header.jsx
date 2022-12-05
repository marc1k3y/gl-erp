import { colors } from "../../colors"
import ss from "./style.module.css"

export const ManageTeamsHeader = () => {
  return (
    <div className={ss.header} style={{ color: colors.table.title }}>
      <div>
        Список фармеров
      </div>
      {/* <div>collapse</div> */}
    </div>
  )
}