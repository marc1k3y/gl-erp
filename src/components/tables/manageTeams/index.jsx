import ss from "./style.module.css"
import { ManageTeamsTbody } from "./tbody"
import { ManageTeamsThead } from "./thead"
import { ManageTeamsHeader } from "./header"

export const ManageTeamsTable = ({ data }) => {
  return (
    <div className={ss.wrapper}>
      <ManageTeamsHeader />
      <table>
        <ManageTeamsThead />
        {data && data.map((item, index) => (
          <ManageTeamsTbody
            key={index}
            number={index + 1}
            fullName={item.farmer.name}
            teamsForWork={item.teams}
            userId={item.farmer.id} />
        ))}
      </table>
    </div>
  )
}