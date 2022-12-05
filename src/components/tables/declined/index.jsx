import ss from "./style.module.css"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { DeclinedTbody } from "./tbody"
import { DeclinedThead } from "./thead"
import { DeclinedHeader } from "./header"
import { getDeclinedTable } from "../../../http/tablesApi"
import { setDeclinedVisibleAction } from "../../../store/tablesVisible/actions"

export const DeclinedTable = ({ ui }) => {
  const dispatch = useDispatch()

  const { startDate, endDate } = useSelector(state => state.period)
  const { condition } = useSelector(state => state.updater)

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [farmerOrBuyer, setFarmerOrBuyer] = useState("")

  useEffect(() => {
    let result
    if (data) {
      if (data[0].farmer) {
        result = "Farmer"
      } else if (data[0].buyer) {
        result = "Buyer"
      } else result = "Worker"
    }
    setFarmerOrBuyer(result)
  }, [data])

  useEffect(() => {
    setLoading(true)
    getDeclinedTable(startDate, endDate, ui)
      .then((res) => {
        res && dispatch(setDeclinedVisibleAction())
        setData(res)
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [startDate, endDate, condition])

  if (loading) return <h1>Loading..</h1>

  if (!data) return

  console.log(data);
  
  return (
    <div className={ss.wrapper}>
      <DeclinedHeader />
      <table>
        <DeclinedThead farmerOrBuyer={farmerOrBuyer} />
        <DeclinedTbody data={data} ui={ui} />
      </table>
    </div>
  )
}