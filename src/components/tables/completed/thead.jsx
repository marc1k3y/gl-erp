import { thStyles } from "../../colors"

export const CompletedThead = ({ farmerOrBuyer }) => {
  return (
    <thead>
      <tr>
        <th style={thStyles}>№</th>
        <th style={thStyles}>Дата создания</th>
        <th style={thStyles}>Дата закрытия</th>
        <th style={thStyles}>Количество</th>
        <th style={thStyles}>Валидных</th>
        <th style={thStyles}>Цена</th>
        <th style={thStyles}>Итого</th>
        <th style={thStyles}>Валюта</th>
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