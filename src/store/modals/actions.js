export const SET_CREATE_ACCOUNT_REQUEST_MODAL = "SET_CREATE_ACCOUNT_REQUEST_MODAL"
export const SET_EDIT_ORDER_MODAL = "SET_EDIT_ORDER_MODAL"
export const SET_CLOSE_ORDER_MODAL = "SET_CLOSE_ORDER_MODAL"
export const SET_DENIAL_REASON_MODAL = "SET_DENIAL_REASON_MODAL"
export const SET_APPROVE_MODAL = "SET_APPROVE_MODAL"

export const SET_CLOSE_ORDER_ID = "SET_CLOSE_ORDER_ID"
export const SET_CLOSE_ORDER_INFO = "SET_CLOSE_ORDER_INFO"
export const SET_DENIAL_REASON_ID = "SET_DENIAL_REASON_ID"
export const SET_ORDER_ID_FOR_UPDATE = "SET_ORDER_ID_FOR_UPDATE"

export const SET_APPROVE_CANCEL_ORDER = "SET_APPROVE_CANCEL_STATUS"
export const SET_APPROVE_RETURN_DECLINE = "SET_APPROVE_RETURN_DECLINE"

export const setCreateAccountRequestModalAction = (payload) => ({ type: SET_CREATE_ACCOUNT_REQUEST_MODAL, payload })
export const setEditOrderModalAction = (payload) => ({ type: SET_EDIT_ORDER_MODAL, payload })
export const setCloseOrderModalAction = (payload) => ({ type: SET_CLOSE_ORDER_MODAL, payload })
export const setDenialReasonModalAction = (payload) => ({ type: SET_DENIAL_REASON_MODAL, payload })
export const setApproveModalAction = (payload) => ({ type: SET_APPROVE_MODAL, payload })

export const setCloseOrderId = (payload) => ({ type: SET_CLOSE_ORDER_ID, payload })
export const setCloseInfoAction = (payload) => ({ type: SET_CLOSE_ORDER_INFO, payload })
export const setDenialReasonIdAction = (payload) => ({ type: SET_DENIAL_REASON_ID, payload })
export const setOrderIdForUpdateAction = (payload) => ({ type: SET_ORDER_ID_FOR_UPDATE, payload })

export const setApproveCancelOrderAction = (payload) => ({ type: SET_APPROVE_CANCEL_ORDER, payload })
export const setApproveReturnDeclineAction = (payload) => ({ type: SET_APPROVE_RETURN_DECLINE, payload })