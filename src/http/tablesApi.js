import {
    $authHost, 
    // $host
} from "."

// v2
export const getPendingTable = async (startDate, endDate, ui) => {
    const { data } = await $authHost.get("tableData/get", {params: {
        status: "0"
    }}, 
    // {
    //     period: { startDate, endDate }
    // }
    )
    return data
}

export const getInWorkTable = async (startDate, endDate, ui) => {
    const { data } = await $authHost.get("tableData/get?status=1", {
        period: { startDate, endDate }
    })
    return data
}

export const getCompletedTable = async (startDate, endDate, ui) => {
    const { data } = await $authHost.get("tableData/get?status=2", {
        period: { startDate, endDate }
    })
    return data
}

export const getDeclinedTable = async (startDate, endDate, ui) => {
    const { data } = await $authHost.get("tableData/get?status=3", {
        period: { startDate, endDate }
    })
    return data
}

export const getTeamListTable = async (period, ui) => {
    const { data } = await $authHost.post("accountRequests/aggregate/teams", {
        period
    })
    return data
}

export const getBuyerListTable = async (period, ui) => {
    const { data } = await $authHost.post("accountRequests/aggregate/buyers", {
        period
    })
    return data
}

export const getFarmerLeftListTable = async (period, ui) => {
    const { data } = await $authHost.post("accountRequests/aggregate/farmers", {
        period
    })
    return data
}

export const getFarmerRightListTable = async (ui) => {
    const { data } = await $authHost.post("team/access/farmers")
    return data
}

// v1
// export const getPendingTable = async (startDate, endDate, ui) => {
//     const { data } = await $host.post("accountRequests/get/pending", {
//         userIdentity: ui,
//         period: { startDate, endDate }
//     })
//     return data
// }

// export const getInWorkTable = async (startDate, endDate, ui) => {
//     const { data } = await $host.post("accountRequests/get/inwork", {
//         userIdentity: ui,
//         period: { startDate, endDate }
//     })
//     return data
// }

// export const getCompletedTable = async (startDate, endDate, ui) => {
//     const { data } = await $host.post("accountRequests/get/completed", {
//         userIdentity: ui,
//         period: { startDate, endDate }
//     })
//     return data
// }

// export const getDeclinedTable = async (startDate, endDate, ui) => {
//     const { data } = await $host.post("accountRequests/get/canceled", {
//         userIdentity: ui,
//         period: { startDate, endDate }
//     })
//     return data
// }

// export const getTeamListTable = async (period, ui) => {
//     const { data } = await $host.post("accountRequests/aggregate/teams", {
//         userIdentity: ui,
//         period
//     })
//     return data
// }

// export const getBuyerListTable = async (period, ui) => {
//     const { data } = await $host.post("accountRequests/aggregate/buyers", {
//         userIdentity: ui,
//         period
//     })
//     return data
// }

// export const getFarmerLeftListTable = async (period, ui) => {
//     const { data } = await $host.post("accountRequests/aggregate/farmers", {
//         userIdentity: ui,
//         period
//     })
//     return data
// }

// export const getFarmerRightListTable = async (ui) => {
//     const { data } = await $host.post("team/access/farmers", {
//         userIdentity: ui,
//     })
//     return data
// }