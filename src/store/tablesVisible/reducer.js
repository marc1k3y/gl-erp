import { SET_COMPLETED_VISIBLE, SET_DECLINED_VISIBLE, SET_INWORK_VISIBLE, SET_PENDING_VISIBLE } from "./actions"

const initState = {
  completed: false,
  inWork: false,
  pending: false,
  declined: false,
}

export function TablesVisibleReducer(state = initState, action) {
  switch (action.type) {
    case SET_COMPLETED_VISIBLE:
      return { ...state, completed: true }
    case SET_INWORK_VISIBLE:
      return { ...state, inWork: true }
    case SET_PENDING_VISIBLE:
      return { ...state, pending: true }
    case SET_DECLINED_VISIBLE:
      return { ...state, declined: true }
    default:
      return state
  }
}