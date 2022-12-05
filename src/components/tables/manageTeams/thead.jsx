import { thStyles } from "../../colors"

export const ManageTeamsThead = () => {
  return (
    <thead>
      <tr>
        <th style={thStyles}>№</th>
        <th style={thStyles}>ФИО</th>
        <th style={thStyles}>Команда для работы</th>
      </tr>
    </thead>
  )
}