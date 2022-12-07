import css from "./style.module.css"
import loader from "../../../assets/loader.svg"
import logo from "../../../assets/logo.png"

export const Loader = ({ size, brandLogo }) => {
  let rootCss = css.wrapper
  if (size === "l") {
    rootCss = css.branding
  }
  function sizedLoader() {
    switch (size) {
      case "s":
        return <img style={{ width: "25px", height: "25px" }} src={loader} alt="loading" />
      case "m":
        return <img style={{ width: "50px", height: "50px" }} src={loader} alt="loading" />
      case "l":
        return <img style={{ width: "100px", height: "100px" }} src={loader} alt="loading" />
      default:
        return <img src={loader} alt="loading" />
    }
  }
  return (
    <div className={rootCss}>
      {brandLogo && <img src={logo} alt="logo" />}
      <div className={css.loader}>
        {sizedLoader()}
      </div>
    </div>
  )
}