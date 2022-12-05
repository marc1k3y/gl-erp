import { setTableRowColor } from "../setTableRowColor"

export const TeamleadListTbody = ({
  number,
  team,
  teamLead,
  teamLeadId,
  quantity,
  valids,
  price,
  setTeamId
}) => {
  return (
    <tbody onClick={() => setTeamId(teamLeadId.toString())}>
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