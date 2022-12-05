import { thStyles } from "../../colors"

export const TeamListThead = () => {
  return (
    <thead>
      <tr>
        <th style={thStyles}>№</th>
        <th style={thStyles}>ФИО</th>
        <th style={thStyles}>Роль</th>
        <th style={thStyles}>Количество</th>
        <th style={thStyles}>Валидные</th>
        <th style={thStyles}>Стоимостью</th>
      </tr>
    </thead>
  )
}