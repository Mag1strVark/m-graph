import s from './Login.module.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, loginUser } from '../../../../redux/features/auth/authSlice'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {status} = useSelector((state) => state.auth)
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (status) toast(status)
        if (isAuth) navigate('/')
    }, [status, isAuth, navigate])

    const handleSubmitLog = () => {
        try {
            dispatch(loginUser({username, password}))
        } catch (error) {
            console.log(error)
        }
    }

    return (
            <div className={s.box}>
                <form className={s.form} onSubmit={e => e.preventDefault()}>
                    <h1>Авторизация</h1>
                    <label>
                        <p>Username:</p>
                        <br/><input type="text"
                               placeholder="Username"
                               value={username}
                               onChange={e => setUserName(e.target.value)}/>

                    </label>
                    <label>
                        <p>Password:</p>
                        <br/><input type="password"
                               placeholder="Password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}/>

                    </label>
                    <div className={s.btn}>
                        <button type="submit" onClick={handleSubmitLog}>
                            Войти
                        </button>
                        <Link to="/register">Нет аккаунта?</Link>
                    </div>
                </form>
                <ToastContainer/>
            </div>
    )
}

export default Login