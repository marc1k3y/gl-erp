import ss from "./style.module.css"

export const MyButton = ({ children, phalete, ...props }) => {
  return (
    <button
      className={ss.wrapper}
      {...props}
      style={{
        backgroundColor: phalete === "gold"
          ? "gold" : "rgb(52, 52, 52)",
        color: phalete === "gold"
          ? "rgb(52, 52, 52)" : "gold",
      }}>
      {children}
    </button>
  )
}