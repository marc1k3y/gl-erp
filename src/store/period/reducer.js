import { SET_PERIOD_END, SET_PERIOD_START } from "./actions"

const initState = {
    startDate: "",
    endDate: ""
}

export function PeriodReducer(state = initState, action) {
    switch (action.type) {
        case SET_PERIOD_START:
            return { ...state, startDate: action.payload }
        case SET_PERIOD_END:
            return { ...state, endDate: action.payload }
        default:
            return state
    }
}