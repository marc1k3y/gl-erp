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
            fullName={item.uid.fullName}
            role={item.uid.role}
            quantity={item.quantity}
            valids={item.valid}
            total={item.total}
            // price={item.price}
            uid={item.uid} />
        ))}
      </table>
    </div>
  )
}