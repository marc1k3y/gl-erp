import ss from "./style.module.css"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { TeamleadListTbody } from "./tbody"
import { TeamleadListThead } from "./thead"
import { TeamleadListHeader } from "./header"
import { getTeamleadListTable } from "../../../http/tablesApi"

export const TeamleadListTable = ({ ui, setTeamleadId }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const { condition } = useSelector(state => state.updater)
  const { startDate, endDate } = useSelector(state => state.period)

  useEffect(() => {
    const period = { startDate, endDate }
    setLoading(true)
    getTeamleadListTable(period, ui)
      .then((res) => setData(res))
      .finally(() => setLoading(false))
  }, [condition])

  console.log(data);

  if (loading) return <h1>Loading..</h1>
  return (
    <div className={ss.wrapper}>
      <TeamleadListHeader />
      <table>
        <TeamleadListThead />
        {data && data.map((item, index) => (
          <TeamleadListTbody
            key={item.uid.id}
            number={index + 1}
            teamLeadId={item.uid.teamlead._id}
            team={item.uid.id}
            teamLead={item.uid.teamlead.fullName}
            quantity={item.quantity}
            valids={item.valid}
            price={item.price}
            setTeamleadId={setTeamleadId} />
        ))}
      </table>
    </div>
  )
}