import {
  $authHost,
  // $host
} from "."

// v2
// modified
export const getPendingTable = async (startDate, endDate, ui) => {
  const { data } = await $authHost.get("tableData/get", {
    params: {
      status: "0",
      startDate: startDate,
      endDate: endDate
    }
  })
  return data
}

// modified
export const getInWorkTable = async (startDate, endDate, ui) => {
  const { data } = await $authHost.get("tableData/get", {
    params: {
      status: "1",
      startDate: startDate,
      endDate: endDate
    }
  })
  return data
}

// modified
export const getCompletedTable = async (startDate, endDate, ui) => {
  const { data } = await $authHost.get("tableData/get", {
    params: {
      status: "2",
      startDate: startDate,
      endDate: endDate
    }
  })
  return data
}

// modified
export const getDeclinedTable = async (startDate, endDate, ui) => {
  const { data } = await $authHost.get("tableData/get", {
    params: {
      status: "3",
      startDate: startDate,
      endDate: endDate
    }
  })
  return data
}

export const getTeamleadListTable = async (period, ui) => {
  const { data } = await $authHost.get("tableData/aggregate/teamleads", {
    params: {
      startDate: period.startDate,
      endDate: period.endDate
    }
  })
  return data
}

export const getBuyerListTable = async (period, ui) => {
  const { data } = await $authHost.get("accountRequests/aggregate/buyers", {
    params: {
      startDate: period.startDate,
      endDate: period.endDate
    }
  })
  return data
}

export const getFarmerListTable = async (period, ui) => {
  const { data } = await $authHost.get("tableData/aggregate/farmers", {
    params: {
      startDate: period.startDate,
      endDate: period.endDate
    }
  })
  return data
}

export const getManageTeamsTable = async (ui) => {
  const { data } = await $authHost.get("farmerAccess/get/farmers")
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