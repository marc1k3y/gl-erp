import { setTableRowColor } from "../setTableRowColor"

export const TeamleadListTbody = ({
  number,
  team,
  teamLead,
  teamLeadId,
  quantity,
  valids,
  price,
  setTeamleadId
}) => {
  return (
    <tbody onClick={() => setTeamleadId(teamLeadId.toString())}>
      <tr style={{ backgroundColor: setTableRowColor(number) }}>
        <td>
          {number}
        </td>
        <td>
          {team}
        </td>
        <td>
          {teamLead}
        </td>
        <td>
          {quantity}
        </td>
        <td>
          {valids}
        </td>
        <td>
          {price}
        </td>
      </tr>
    </tbody>
  )
}