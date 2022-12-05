import { SET_FARMER_UI, SET_BUYER_UI } from "./actions"

const initState = {
  farmerUi: null,
  buyerUi: null
}

export function FarmerBuyerTablesReducer(state = initState, action) {
  switch (action.type) {
    case SET_FARMER_UI:
      return { ...state, farmerUi: action.payload }
    case SET_BUYER_UI:
      return { ...state, buyerUi: action.payload }
    default:
      return state
  }
}