import { colors } from "../../colors"
import css from "./style.module.css"

export const ModalBtn = ({ children, ...props }) => {
  return (
    <button className={css.wrapper} {...props} style={colors.modals.button}>
      {children}
    </button>
  )
}