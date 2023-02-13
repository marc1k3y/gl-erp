import { $host, $authHost } from "./index"
// import jwtDecode from "jwt-decode"

export const login = async (email, password) => {
    const { data } = await $host.post("auth/login", { email, password })
    localStorage.setItem("token", data.token)
    localStorage.setItem("username", data.username)
    localStorage.setItem("roleID", data.roleID)
    localStorage.setItem("teamID", data.teamID)
    localStorage.setItem("userID", data.userID)
    return data
}

export const check = async () => {
    const { data } = await $authHost.get("auth/check")
    return data
    // localStorage.setItem("token", data.token)
    // return jwtDecode(data.token)
}

export const getTokenByUid = async (userID) => {
    const { data } = await $host.get("auth/token/get?userID=270")
    return data
}