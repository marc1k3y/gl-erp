import { $authHost, $host } from "."
import { createUserIdentity } from "../components/createUserIdentity"

// v2
// export const sendCancelReason = async (orderId, denialReason) => {
//     const { data } = await $authHost.post("accountRequests/update/status/canceled", {
//         orderID: orderId,
//         denialReason
//     })
//     return data
// }

// export const sendCloseOrder = async (orderId, closeOrderInfo) => {
//     const { data } = await $authHost.post("accountRequests/update/status/completed", {
//         orderID: orderId,
//         closeOrderInfo
//     })
//     return data
// }

// export const sendAccountRequest = async (ui, ar) => {
//     const { data } = await $authHost.post("accountRequests/create", {
//         accountRequest: ar
//     })
//     return data
// }

// export const updateOrderInfo = async (orderId, ui, modifyInfo) => {
//     const request = { updateBody: modifyInfo }
//     const { data } = await $authHost.post(`accountRequests/update/request?orderID=${orderId}`, request)
//     return data
// }

// v1
export const sendCancelReason = async (orderId, denialReason) => {
    const ui = createUserIdentity()
    const { data } = await $host.post("accountRequests/update/status/canceled", {
        orderID: orderId,
        userIdentity: ui,
        denialReason
    })
    return data
}

export const sendCloseOrder = async (orderId, closeOrderInfo) => {
    const ui = createUserIdentity()
    const { data } = await $host.post("accountRequests/update/status/completed", {
        orderID: orderId,
        userIdentity: ui,
        closeOrderInfo
    })
    return data
}

export const sendAccountRequest = async (ui, ar) => {
    console.log(ui, ar);
    const { data } = await $host.post("accountRequests/create", {
        userIdentity: ui, accountRequest: ar
    })
    return data
}

export const updateOrderInfo = async (orderId, ui, modifyInfo) => {
    const request = { userIdentity: ui, updateBody: modifyInfo }
    console.log(request);
    const { data } = await $host.post(`accountRequests/update/request?orderID=${orderId}`, request)
    return data
}