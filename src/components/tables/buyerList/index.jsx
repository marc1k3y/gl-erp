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
          && data.map((item, index) => (
            <TeamListTbody
              key={index}
              number={index + 1}
              fullName={item.uid.fullName}
              role={item.uid.role}
              quantity={item.quantity}
              valids={item.valid}
              // price={item.price}
              total={item.total}
              // buyerId={item.uid._id}
              // roleId={item.uid.role}
              uid={item.uid} />
          ))}
      </table>
    </div>
  )
}