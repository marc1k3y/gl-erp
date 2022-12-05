import {
    SET_CREATE_ACCOUNT_REQUEST_MODAL, SET_CLOSE_ORDER_MODAL, SET_DENIAL_REASON_MODAL, SET_EDIT_ORDER_MODAL, SET_APPROVE_MODAL,
    SET_CLOSE_ORDER_INFO, SET_CLOSE_ORDER_ID, SET_DENIAL_REASON_ID, SET_ORDER_ID_FOR_UPDATE, SET_APPROVE_CANCEL_ORDER, SET_APPROVE_RETURN_DECLINE
} from "./actions"

const initState = {
    createAccountRequestModal: false,
    denialReasonModal: false,
    editOrderModal: false,
    closeOrderModal: false,
    approveModal: false,
    closeInfo: null,
    closeOrderId: null,
    denialReasonId: null,
    orderIdForUpdate: null,
    approveCancelOrder: false,
    approveReturnDecline: false
}

export function ModalsReducer(state = initState, action) {
    switch (action.type) {
        case SET_CREATE_ACCOUNT_REQUEST_MODAL:
            return { ...state, createAccountRequestModal: action.payload }
        case SET_DENIAL_REASON_MODAL:
            return { ...state, denialReasonModal: action.payload }
        case SET_EDIT_ORDER_MODAL:
            return { ...state, editOrderModal: action.payload }
        case SET_CLOSE_ORDER_MODAL:
            return { ...state, closeOrderModal: action.payload }
        case SET_APPROVE_MODAL:
            return { ...state, approveModal: action.payload }
        case SET_CLOSE_ORDER_INFO:
            return { ...state, closeInfo: action.payload }
        case SET_CLOSE_ORDER_ID:
            return { ...state, closeOrderId: action.payload }
        case SET_DENIAL_REASON_ID:
            return { ...state, denialReasonId: action.payload }
        case SET_ORDER_ID_FOR_UPDATE:
            return { ...state, orderIdForUpdate: action.payload }
        case SET_APPROVE_CANCEL_ORDER:
            return { ...state, approveCancelOrder: action.payload }
        case SET_APPROVE_RETURN_DECLINE:
            return { ...state, approveReturnDecline: action.payload }
        default:
            return state
    }
}