import { thStyles } from "../../colors"

export const TeamleadListThead = () => {
  return (
    <thead>
      <tr>
        <th style={thStyles}>№</th>
        <th style={thStyles}>Команда</th>
        <th style={thStyles}>Тимлид</th>
        <th style={thStyles}>Количество</th>
        <th style={thStyles}>Валидные</th>
        <th style={thStyles}>Стоимостью</th>
      </tr>
    </thead>
  )
}