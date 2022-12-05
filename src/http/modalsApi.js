import { $authHost, $host } from "."
import { createUserIdentity } from "../components/createUserIdentity"

// v2
// modified
export const sendCancelReason = async (orderId, denialReason) => {
  const { data } = await $authHost.put("accountRequests/cancel", {
    requestID: orderId,
    cancellationCause: denialReason
  })
  return data
}

// modified
export const sendCloseOrder = async (orderId, currencyID = "", price, valid) => {
  console.log(orderId, currencyID, price, valid);
  const { data } = await $authHost.put("accountRequests/complete", {
    requestID: orderId,
    currencyID,
    price: parseFloat(price),
    valid: parseInt(valid)
  })
  return data
}

// modified
export const sendAccountRequest = async (ui, ar) => {
  const { data } = await $authHost.post("accountRequests/create", {
    currencyID: ar.currencyID,
    description: ar.description,
    locationID: ar.locationID,
    price: parseFloat(ar.price),
    quantity: parseInt(ar.quantity),
    typeID: ar.typeID
  })
  return data
}

export const updateOrderInfo = async (orderId, ui, modifyInfo) => {
  const request = { updateBody: modifyInfo }
  const { data } = await $authHost.post(`accountRequests/update/request?orderID=${orderId}`, request)
  return data
}

// v1
// export const sendCancelReason = async (orderId, denialReason) => {
//     const ui = createUserIdentity()
//     const { data } = await $host.post("accountRequests/update/status/canceled", {
//         orderID: orderId,
//         userIdentity: ui,
//         denialReason
//     })
//     return data
// }

// export const sendCloseOrder = async (orderId, closeOrderInfo) => {
//     const ui = createUserIdentity()
//     const { data } = await $host.post("accountRequests/update/status/completed", {
//         orderID: orderId,
//         userIdentity: ui,
//         closeOrderInfo
//     })
//     return data
// }

// export const sendAccountRequest = async (ui, ar) => {
//     console.log(ui, ar);
//     const { data } = await $host.post("accountRequests/create", {
//         userIdentity: ui, accountRequest: ar
//     })
//     return data
// }

// export const updateOrderInfo = async (orderId, ui, modifyInfo) => {
//     const request = { userIdentity: ui, updateBody: modifyInfo }
//     console.log(request);
//     const { data } = await $host.post(`accountRequests/update/request?orderID=${orderId}`, request)
//     return data
// }