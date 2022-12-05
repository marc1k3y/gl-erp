import {
    $host,
    // $authHost
} from "./index"
// import jwtDecode from "jwt-decode"

// modified
export const login = async (email, password) => {
    console.log(email, password);
    const { data } = await $host.post("auth/login", { email, password })
    localStorage.setItem("token", data.token)
    localStorage.setItem("username", data.username)
    localStorage.setItem("roleID", data.roleID)
    localStorage.setItem("teamID", data.teamID)
    localStorage.setItem("userID", data.userID)
    return data
}

// export const check = async () => {
//     const { data } = await $authHost.get("api/user/auth")
//     localStorage.setItem("token", data.token)
//     return jwtDecode(data.token)
// }