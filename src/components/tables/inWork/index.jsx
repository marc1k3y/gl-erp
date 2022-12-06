import ss from "./style.module.css"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { InWorkTbody } from "./tbody"
import { InWorkThead } from "./thead"
import { InWorkHeader } from "./header"
import { getInWorkTable } from "../../../http/tablesApi"
import { setInWorkVisibleAction } from "../../../store/tablesVisible/actions"

export const InWorkTable = ({ ui }) => {
  const dispatch = useDispatch()

  const { startDate, endDate } = useSelector(state => state.period)
  const { condition } = useSelector(state => state.updater)

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [farmerOrBuyer, setFarmerOrBuyer] = useState("")

  useEffect(() => {
    let result
    if (data) {
      if (data[0].farmer.fullName) {
        result = "Фармер"
      } else if (data[0].buyer.fullName) {
        result = "Баер"
      } else result = "Исполнитель"
    }
    setFarmerOrBuyer(result)
  }, [data])

  useEffect(() => {
    setLoading(true)
    getInWorkTable(startDate, endDate, ui)
      .then((res) => {
        res && dispatch(setInWorkVisibleAction())
        setData(res)
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [startDate, endDate, condition])

  if (loading) return <h1>Loading..</h1>

  if (!data) return

  return (
    <div className={ss.wrapper}>
      <InWorkHeader />
      <table>
        <InWorkThead farmerOrBuyer={farmerOrBuyer} />
        <InWorkTbody data={data} />
      </table>
    </div>
  )
}