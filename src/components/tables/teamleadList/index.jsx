import ss from "./style.module.css"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { TeamleadListTbody } from "./tbody"
import { TeamleadListThead } from "./thead"
import { TeamleadListHeader } from "./header"
import { getTeamListTable } from "../../../http/tablesApi"

export const TeamleadListTable = ({ ui, setTeamId }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const { condition } = useSelector(state => state.updater)
  const { startDate, endDate } = useSelector(state => state.period)

  useEffect(() => {
    const period = { startDate, endDate }
    setLoading(true)
    getTeamListTable(period, ui)
      .then((res) => setData(res))
      .finally(() => setLoading(false))
  }, [condition])

  if (loading) return <h1>Loading..</h1>
  return (
    <div className={ss.wrapper}>
      <TeamleadListHeader />
      <table>
        <TeamleadListThead />
        {data && data.map((item, index) => (
          <TeamleadListTbody
            key={item._id.teamlead.id}
            teamLeadId={item._id.teamlead.id}
            number={index + 1}
            team={item._id.number}
            teamLead={item._id.teamlead.name}
            quantity={item.quantity}
            valids={item.valid}
            price={item.price}
            setTeamId={setTeamId} />
        ))}
      </table>
    </div>
  )
}