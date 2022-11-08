import s from './Login.module.css'
import React, { useEffect, useState } from 'react'
import { Link , Navigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, loginUser } from '../../../../store/features/auth/authSlice'
import { toast } from 'react-toastify'


const Login = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const status = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() =>{
        if(status) toast(status)
    },[status])

    const handleSubmit = () => {
        try {
            dispatch(loginUser({username, password}))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.box}>
                <form className={s.form} onSubmit={e => e.preventDefault()}>
                    <h1>Авторизация</h1>
                    <label>
                        Username:
                        <input type="text"
                               placeholder="Username"
                               value={username}
                               onChange={e => setUserName(e.target.value)}/>

                    </label>
                    <label>
                        Password:
                        <input type="text"
                               placeholder="Password"
                               value={username}
                               onChange={e => setUserName(e.target.value)}/>

                    </label>
                    <div className={s.btn}>
                        <button type="submit" onClick={handleSubmit}>
                            Войти
                        </button>
                        <Link to="/register">Нет аккаунта?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login