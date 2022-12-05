import ss from "./style.module.css"
import cancelIco from "../../assets/cancel.svg"
import { useDispatch, useSelector } from "react-redux"
import { setPeriodEndAction, setPeriodStartAction } from "../../store/period/actions"
import { colors } from "../colors"

export const PeriodSelector = () => {
  const dispatch = useDispatch()
  const { startDate, endDate } = useSelector(state => state.period)
  const resetBtnVisible = startDate || endDate

  function setPeriodStart(value) {
    dispatch(setPeriodStartAction(value))
  }

  function setPeriodEnd(value) {
    dispatch(setPeriodEndAction(value))
  }

  function resetPeriod() {
    dispatch(setPeriodStartAction(""))
    dispatch(setPeriodEndAction(""))
  }

  return (
    <div className={ss.wrapper} style={{ backgroundColor: colors.periodSelector.bckg, color: colors.periodSelector.font }}>
      <label htmlFor="from">
        от
      </label>
      <input
        name="from"
        type="date"
        value={startDate}
        onChange={(e) => setPeriodStart(e.target.value)} />
      <label htmlFor="to">до</label>
      <input
        name="to"
        type="date"
        value={endDate}
        onChange={(e) => setPeriodEnd(e.target.value)} />
      {resetBtnVisible && <button onClick={resetPeriod}>
        <img src={cancelIco} alt="reset" />
      </button>}
    </div>
  )
}