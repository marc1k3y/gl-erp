import { SET_UPDATER } from "./actions"

const initState = {
    condition: false
}

export function UpdaterReducer(state = initState, action) {
    switch (action.type) {
        case SET_UPDATER:
            return { ...state, condition: !state.condition }
        default:
            return state
    }
}