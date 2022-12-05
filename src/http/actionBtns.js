import {
    // $authHost,
    $host
} from "."

// v2
// export const sendStartStatus = async (orderId, ui) => {
//     const { data } = await $authHost.post(`accountRequests/update/status/inwork?requestID=${orderId}`)
//     return data
// }

// export const addTeamForFarmer = async (ui, teamNum) => {
//     const { data } = await $authHost.post("team/access/add", {
//         teamEdit: {
//             teamID: teamNum
//         }
//     })
//     return data
// }

// export const removeTeamForFarmer = async (ui, teamNum) => {
//     const { data } = await $authHost.post("team/access/revoke", {
//         teamEdit: {
//             teamID: teamNum.toString()
//         }
//     })
//     return data
// }

// export const getOrderById = async (orderId) => {
//     const { data } = await $authHost.get(`accountRequests/get/request?orderID=${orderId}`)
//     return data
// }

// export const returnFromDeclined = async (orderId, ui) => {
//     const { data } = await $authHost.post("accountRequests/update/status/return", {
//         orderID: orderId
//     })
//     return data
// }

// v1
export const sendStartStatus = async (orderId, ui) => {
    // const ui = createUserIdentity()
    const { data } = await $host.post("accountRequests/update/status/inwork", {
        orderID: orderId,
        userIdentity: ui,
    })
    return data
}

export const addTeamForFarmer = async (ui, teamNum) => {
    const { data } = await $host.post("team/access/add", {
        userIdentity: ui,
        teamEdit: {
            teamID: teamNum
        }
    })
    return data
}

export const removeTeamForFarmer = async (ui, teamNum) => {
    const { data } = await $host.post("team/access/revoke", {
        userIdentity: ui,
        teamEdit: {
            teamID: teamNum.toString()
        }
    })
    return data
}

export const getOrderById = async (orderId) => {
    const { data } = await $host.get(`accountRequests/get/request?orderID=${orderId}`)
    return data
}

export const returnFromDeclined = async (orderId, ui) => {
    const { data } = await $host.post("accountRequests/update/status/return", {
        orderID: orderId, userIdentity: ui
    })
    return data
}