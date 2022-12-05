import { LOGOUT, SUCCESS_AUTH } from "./actions"

const initState = {
    isAuth: false,
    url: "http://84.201.138.62:9090/v1/"
}

export function AuthReducer(state = initState, action) {
    switch (action.type) {
        case SUCCESS_AUTH:
            return { ...state, isAuth: true }
        case LOGOUT:
            return { ...state, isAuth: false }
        default:
            return state
    }
}