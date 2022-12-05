import { colors } from "../../colors"
import ss from "./style.module.css"

export const Modal = ({ children, visible, setVisible }) => {

    const rootClass = [ss.wrapper]

    if (visible) {
        rootClass.push(ss.active)
    }

    return (
        <div
            style={{ backgroundColor: colors.modals.externalBckg }}
            className={rootClass.join(" ")}
            onClick={() => setVisible(false)}>
            <div
                style={{ backgroundColor: colors.modals.interiorBckg }}
                className={ss.content}
                onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}