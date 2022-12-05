import { $authHost, $host } from "./index"

// v2
// export const getAccountsType = async () => {
//     const { data } = await $authHost.post("accountTypes/get/all")
//     return data
// }

// export const getCountries = async () => {
//     const { data } = await $authHost.post("locations/get/all")
//     return data
// }

// export const getCurrencies = async () => {
//     const { data } = await $authHost.post("currency/get/all")
//     return data
// }

// export const getDropdownTeams = async (ui) => {
//     const { data } = await $authHost.post("team/get/dropdown")
//     return data
// }

// v1
export const getAccountsType = async () => {
    const { data } = await $host.post("accountTypes/get/all")
    return data
}

export const getCountries = async () => {
    const { data } = await $host.post("locations/get/all")
    return data
}

export const getCurrencies = async () => {
    const { data } = await $host.post("currency/get/all")
    return data
}

export const getDropdownTeams = async (ui) => {
    const { data } = await $host.post("team/get/dropdown", {
        userIdentity: ui
    })
    return data
}