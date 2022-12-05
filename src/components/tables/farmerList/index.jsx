import ss from "./style.module.css"
import { FarmerListTbody } from "./tbody"
import { FarmerListThead } from "./thead"
import { FarmerListHeader } from "./header"

export const FarmerListTable = ({ data }) => {
  return (
    <div className={ss.wrapper}>
      <FarmerListHeader />
      <table>
        <FarmerListThead />
        {data && data.map((item, index) => (
          <FarmerListTbody
            key={index}
            number={index + 1}
            fullName={item._id.name}
            role={item._id.position}
            quantity={item.quantity}
            valids={item.valid}
            price={item.totalSum}
            ui={item.userIdentity} />
        ))}
      </table>
    </div>
  )
}