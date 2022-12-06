import "./App.css"
import { useSelector } from "react-redux"
import { AuthPage } from "./pages/auth"
import { Router } from "./components/router"
import { Header } from "./components/header"

export default function App() {
  const { isAuth } = useSelector(state => state.auth)

  return (
    <div className="App">
      {isAuth && <Header />}
      <div className="container">
        {isAuth
          ? <Router />
          : <AuthPage />}
      </div>
    </div>
  )
}