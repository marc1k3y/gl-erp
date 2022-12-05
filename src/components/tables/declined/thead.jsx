import { thStyles } from "../../colors"

export const DeclinedThead = () => {
  return (
    <thead>
      <tr>
        <th style={thStyles}>№</th>
        <th style={thStyles}>Дата создания</th>
        <th style={thStyles}>Дата закрытия</th>
        <th style={thStyles}>Тип аккаунта</th>
        <th style={thStyles}>Локация</th>
        <th style={thStyles}>Отменил</th>
        <th style={thStyles}>Причина отмены</th>
        <th style={thStyles}>Действия</th>
      </tr>
    </thead>
  )
}