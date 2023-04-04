import ss from "./style.module.css"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getPendingTable } from "../../../http/tablesApi"
import { PendingTbody } from "./tbody"
import { PendingThead } from "./thead"
import { PendingHeader } from "./header"
import { setPendingVisibleAction } from "../../../store/tablesVisible/actions"
import { Loader } from "../../UI/loader"

export const PendingTable = ({ ui }) => {
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
    getPendingTable(startDate, endDate, ui)
      .then((res) => {
        console.log(ui);
        res && dispatch(setPendingVisibleAction())
        setData(res)
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [startDate, endDate, condition])

  console.log(data);

  if (loading) return <Loader size={"m"} />

  if (!data) return

  return (
    <div className={ss.wrapper}>
      <PendingHeader />
      <table>
        <PendingThead farmerOrBuyer={farmerOrBuyer} />
        <PendingTbody data={data} ui={ui} />
      </table>
    </div>
  )
}