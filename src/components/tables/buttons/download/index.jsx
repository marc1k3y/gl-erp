import ss from "./style.module.css"
import downloadIco from "../../../../assets/download.svg"

export const DownloadBtn = () => {
  return (
    <button className={ss.wrapper}>
      <img src={downloadIco} alt="download" />
    </button>
  )
}