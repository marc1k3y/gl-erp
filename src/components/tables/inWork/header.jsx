import { colors } from "../../colors"
import ss from "./style.module.css"

export const InWorkHeader = () => {
  return (
    <div className={ss.header} style={{ color: colors.table.title }}>
      <div>
        В работе
      </div>
      {/* <div>collapse</div> */}
    </div>
  )
}