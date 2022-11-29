import ss from "./style.module.css"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { successAuthAction } from "../../store/auth/actions"
import { login } from "../../http/authApi"
import { MyButton } from "../../components/UI/button"

export const AuthPage = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("buyer@mail.com")
    const [password, setPassword] = useState("!Buyer123")

    function auth(e) {
        e.preventDefault()
        login(email, password)
            .then((res) => {
                console.log(res)
                dispatch(successAuthAction())
            })
            .catch((e) => console.log(e.message))
    }
    return (
        <div className={ss.wrapper}>
            <div className={ss.logo}>
                <img src={logo} alt="brand-logo" />
            </div>
            <div className={ss.authForm}>
                <form onSubmit={(e) => auth(e)}>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <MyButton>
                        Войти
                    </MyButton>
                </form>
            </div>
        </div>
    )
}