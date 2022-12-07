import ss from "./style.module.css"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { CompletedTbody } from "./tbody"
import { CompletedThead } from "./thead"
import { CompletedHeader } from "./header"
import { getCompletedTable } from "../../../http/tablesApi"
import { setCompletedVisibleAction } from "../../../store/tablesVisible/actions"
import { Loader } from "../../UI/loader"

export const CompletedTable = ({ ui }) => {
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
      } else if (data[0].team.teamlead.fullName) {
        result = "Тимлид"
      } else result = "Исполнитель"
    }
    setFarmerOrBuyer(result)
  }, [data])

  useEffect(() => {
    setLoading(true)
    getCompletedTable(startDate, endDate, ui)
      .then((res) => {
        res && dispatch(setCompletedVisibleAction())
        setData(res)
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [startDate, endDate, condition])

  if (loading) return <Loader size={"m"} />

  if (!data) return

  return (
    <div className={ss.wrapper}>
      <CompletedHeader />
      <table>
        <CompletedThead farmerOrBuyer={farmerOrBuyer} />
        <CompletedTbody data={data} />
      </table>
    </div>
  )
}