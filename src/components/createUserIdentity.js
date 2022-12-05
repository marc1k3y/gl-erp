export function createUserIdentity() {
    const userIdentity = {}
    userIdentity.userID = localStorage.getItem("userID")
    userIdentity.roleID = localStorage.getItem("roleID")
    userIdentity.teamID = localStorage.getItem("teamID")
    userIdentity.username = localStorage.getItem("username")
    userIdentity.token = localStorage.getItem("token")
    return userIdentity
}