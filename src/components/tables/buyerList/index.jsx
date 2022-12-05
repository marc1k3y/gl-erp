import ss from "./style.module.css"
import { useState } from "react"
import { TeamListTbody } from "./tbody"
import { TeamListThead } from "./thead"
import { TeamListHeader } from "./header"

export const BuyerListTable = ({ data }) => {
  const [visible, setVisible] = useState(false)
  return (
    <div className={ss.wrapper}>
      <TeamListHeader />
      <table>
        <TeamListThead />
        {data
          ? data.map((item, index) => (
            <TeamListTbody
              key={index}
              number={index + 1}
              fullName={item._id.name}
              role={item._id.position}
              quantity={item.quantity}
              valids={item.valid}
              price={item.totalSum}
              buyerId={item.userData.userID}
              roleId={item.userData.roleID} />
          ))
          : <div className={ss.emptyDataText}>
            Выберите Тимлида
          </div>}
      </table>
    </div>
  )
}