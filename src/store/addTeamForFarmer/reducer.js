import { SET_ADD_TEAM_FOR_FARMER_MODAL, SET_FARMER_UI_FOR_REQUEST } from "./actions";

const initState = {
    addTeamModal: false,
    farmerUiForRequest: null
}

export function AddTeamForFarmerReducer(state = initState, action) {
    switch (action.type) {
        case SET_ADD_TEAM_FOR_FARMER_MODAL:
            return { ...state, addTeamModal: action.payload }
        case SET_FARMER_UI_FOR_REQUEST:
            return { ...state, farmerUiForRequest: action.payload }
        default:
            return state
    }
}