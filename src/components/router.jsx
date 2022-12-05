import { createUserIdentity } from "./createUserIdentity"
import { Role347Page } from "../pages/roles/role347"
import { Role6Page } from "../pages/roles/role6"
import { Role2Page } from "../pages/roles/role2"
import { Role5Page } from "../pages/roles/role5"
import { Role1Page } from "../pages/roles/role1"

function getRoutesByRole(id) {
    const role347 = [3, 4, 7]
    const role6 = [6]
    const role2 = [2]
    const role5 = [5]
    const role1 = [1]

    if (role347.includes(id)) return <Role347Page />
    if (role6.includes(id)) return <Role6Page />
    if (role2.includes(id)) return <Role2Page />
    if (role5.includes(id)) return <Role5Page />
    if (role1.includes(id)) return <Role1Page />
}

export const Router = () => {
    const roleId = parseInt(createUserIdentity().roleID)

    return getRoutesByRole(roleId)
}