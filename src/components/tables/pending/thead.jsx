import { colors, thStyles } from "../../colors"

export const PendingThead = ({ farmerOrBuyer }) => {
  return (
    <thead>
      <tr>
        <th style={thStyles}>№</th>
        <th style={thStyles}>Дата</th>
        <th style={thStyles}>Количество</th>
        <th style={thStyles}>Тип аккаунта</th>
        <th style={thStyles}>Локация</th>
        <th style={thStyles}>{farmerOrBuyer}</th>
        <th style={thStyles}>Описание</th>
        <th style={thStyles}>Команда</th>
        <th style={thStyles}>Действия</th>
      </tr>
    </thead>
  )
}