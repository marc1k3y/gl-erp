import { $authHost, $host } from "./index"

// v2
// all modified
export const getAccountsType = async () => {
    const { data } = await $authHost.get("accountTypes/get/all")
    return data
}

export const getCountries = async () => {
    const { data } = await $authHost.get("locations/get/all")
    return data
}

export const getCurrencies = async () => {
    const { data } = await $authHost.get("currency/get/all")
    return data
}

export const getDropdownTeams = async () => {
    const { data } = await $authHost.get("farmerAccess/get/teams")
    return data
}

// v1
// export const getAccountsType = async () => {
//     const { data } = await $host.post("accountTypes/get/all")
//     return data
// }

// export const getCountries = async () => {
//     const { data } = await $host.post("locations/get/all")
//     return data
// }

// export const getCurrencies = async () => {
//     const { data } = await $host.post("currency/get/all")
//     return data
// }

// export const getDropdownTeams = async (ui) => {
//     const { data } = await $host.post("team/get/dropdown", {
//         userIdentity: ui
//     })
//     return data
// }