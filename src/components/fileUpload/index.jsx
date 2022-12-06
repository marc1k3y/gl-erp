import ss from "./style.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { api } from "../../constants"
import { setUpdaterAction } from "../../store/updater/actions"
import { useRef } from "react"
import uploadIco from "../../assets/upload.svg"
import updateIco from "../../assets/update.svg"

const chunkSize = 256000; // it's 256 bytes

export const FileUpload = ({ oid, setOid, closeCb, fileToBeUpload, setFileToBeUpload }) => {
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  const [showProgress, setShowProgress] = useState(false)
  const [counter, setCounter] = useState(0)
  const [beginingOfTheChunk, setBeginingOfTheChunk] = useState(0)
  const [endOfTheChunk, setEndOfTheChunk] = useState(chunkSize)
  const [progress, setProgress] = useState(0)
  const [fileSize, setFileSize] = useState(0)
  const [fileName, setFileName] = useState("")
  const [chunkCount, setChunkCount] = useState(0)

  useEffect(() => {
    // console.log(oid);
    // console.log(inputRef);
    // console.log(showProgress);
    // console.log(counter);
    // console.log(beginingOfTheChunk);
    // console.log(progress);
    // console.log(fileName);
    // console.log(fileSize);
    // console.log(chunkCount);
    if (fileSize > 0) {
      setShowProgress(true)
      fileUpload(counter)
    }
  }, [fileToBeUpload, progress, oid])

  function resetFileInput() {
    inputRef.current.value = null
  }

  function finishUpload() {
    setProgress(100)
    setTimeout(() => {
      cleanFileContext()
      dispatch(closeCb())
      dispatch(setUpdaterAction())
    }, 1000)
  }

  function cleanFileContext() {
    setOid(null)
    setFileToBeUpload(null)
    setFileName("")
    setFileSize(0)
    setChunkCount(0)
    setProgress(0)
    setCounter(0)
    setBeginingOfTheChunk(0)
    setShowProgress(false)
    resetFileInput()
    setEndOfTheChunk(chunkSize)
  }

  const getFileContext = (e) => {
    const _file = e.target.files[0]
    setFileSize(_file.size)
    setFileName(_file.name)
    const _totalCount =
      _file.size % chunkSize === 0
        ? _file.size / chunkSize
        : Math.floor(_file.size / chunkSize) + 1 // Total count of chunks will have been upload to finish the file
    setChunkCount(_totalCount)
    setFileToBeUpload(_file)
  }

  const fileUpload = () => {
    setCounter(counter + 1)
    if (counter <= chunkCount) {
      let chunk = fileToBeUpload.slice(beginingOfTheChunk, endOfTheChunk)
      if (oid)
        uploadChunk(chunk)
    }
  }

  const uploadChunk = async (chunk) => {
    try {
      console.log(beginingOfTheChunk, endOfTheChunk, fileSize);
      const formData = new FormData()
      formData.append("file", chunk)
      formData.append("fileName", fileName)
      const response = await axios.post(
        `${api}files/upload`,
        formData,
        {
          params: {
            oid: oid,
          },
          headers: {
            "Content-Type": "application/json",
            "C-Range": `bytes ${beginingOfTheChunk}-${endOfTheChunk}/${fileSize}`
          }
        }
      )
        .catch((e) => console.log(e))
      const data = response.data
      if (data.success) {
        setBeginingOfTheChunk(endOfTheChunk)
        setEndOfTheChunk(endOfTheChunk + chunkSize)
        if (counter === chunkCount) {
          finishUpload()
        } else {
          let percentage = (counter / chunkCount) * 100
          setProgress(percentage)
        }
      } else {
        console.log("Error Occurred:", data.message)
      }
    } catch (error) {
      console.log("error", error)
    }
  }
  return (
    <div className={ss.wrapper}>
      <label className={ss.uploadInput}>
        <img src={fileToBeUpload ? updateIco : uploadIco} alt="upload-ico" />
        <input ref={inputRef} type="file" onChange={(e) => getFileContext(e)} />
        {fileToBeUpload ? "Изменить файл" : "Загрузить файл"}
      </label>
      {showProgress &&
        <div className={ss.progress}>
          {fileName}
          <div className={ss.progressBar}>
            <div className={ss.progressLine} style={{ width: `${progress}%` }}></div>
          </div>
        </div>}
    </div>
  )
}