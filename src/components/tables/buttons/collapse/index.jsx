import ss from "./style.module.css"
import collapseIco from "../../../../assets/collapse.svg"

export const CollapseBtn = ({ showData, setShowData }) => {
  return (
    <button onClick={() => setShowData(!showData)} className={ss.wrapper}>
      <img src={collapseIco} alt="collapse"
        style={{ transform: showData ? "" : "rotate(180deg)" }}
      />
    </button>
  )
}