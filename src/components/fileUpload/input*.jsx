import css from "./style.module.css"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFileContextAction } from "../../store/fileUpload/actions"
import uploadIco from "../../assets/upload.svg"
import updateIco from "../../assets/update.svg"

export const FileInput = () => {
  const dispath = useDispatch()
  const inputRef = useRef(null)
  const { uploadFile } = useSelector(state => state.fileUpload)

  function resetFileInput() {
    inputRef.current.value = null
  }
  return (
    <label className={css.uploadInput}>
      <img src={uploadFile ? updateIco : uploadIco} alt="upload-ico" />
      <input ref={inputRef} type="file" onChange={(e) => dispath(setFileContextAction(e))} />
      {fileToBeUpload ? "Изменить файл" : "Загрузить файл"}
    </label>
  )
}