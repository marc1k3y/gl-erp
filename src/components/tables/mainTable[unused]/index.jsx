import css from "./style.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCompletedTable } from "../../../http/tablesApi"
import { setCompletedVisibleAction } from "../../../store/tablesVisible/actions"
import { createUserIdentity } from "../../createUserIdentity"
import { converDate } from "../convertDate"

export const MainTable = () => {

  const ui = createUserIdentity() // temp

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState(null)

  const { startDate, endDate } = useSelector(state => state.period)
  const { condition } = useSelector(state => state.updater)

  function checkRole(data) {
    console.log(data[0]);
    let result
    if (data) {
      if (data[0].farmer) {
        result = "Фармер"
      } else if (data[0].buyer) {
        result = "Баер"
      } else result = "Исполнитель"
    }
    setRole(result)
  }

  // start completed
  const [completed, setCompleted] = useState({
    title: "Завершенные",
    headers: ["№", "Дата создания", "Дата закрытия", "Количество", "Валидных", "Цена", "Итого", "Валют", "Тип аккаунта", "Локация", role, "Описание", "Команда", "Действия"],
    data: null
  })

  const completedTable = (headers, data) => {
    return (
      <table>
        <thead>
          <tr>
            {headers?.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{converDate(item.dateCreated)}</td>
              <td>{converDate(item.dateFinished)}</td>
              <td>{item.accountRequest.quantity}</td>
              <td>{item.valid}</td>
              <td>{item.price}</td>
              <td>{item.totalSum}</td>
              <td>{item.currency.iso}</td>
              <td>{item.accountRequest.type.name}</td>
              <td>{item.accountRequest.location.name}</td>
              <td>{item.farmer ? item.farmer.name : item.buyer.name}</td>
              <td>{item.description}</td>
              <td>{item.team.number}</td>
              {/* <td>{showActions(item._id, fileApi + item.downloadLink)}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  useEffect(() => {
    setLoading(true)
    getCompletedTable(startDate, endDate, ui)
      .then((res) => {
        console.log(res);
        res && dispatch(setCompletedVisibleAction())
        res && checkRole(res)
        res && setCompleted((prev) => ({ ...prev, data: res }))
      })
      .catch(() => setCompleted((prev) => ({ ...prev, data: null })))
      .finally(() => setLoading(false))
  }, [startDate, endDate, condition])
  console.log(completed);
  // finish completed

  if (loading) return <h1>Loading..</h1>

  return (
    <div className={css.wrapper}>
      {completedTable(completed.headers, completed.data)}
    </div>
  )
}