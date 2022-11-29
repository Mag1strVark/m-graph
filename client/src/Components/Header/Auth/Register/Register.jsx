import s from './Register.module.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, registerUser } from '../../../../redux/features/auth/authSlice'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {

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

    const handleSubmitReg = () => {
        try {
            dispatch(registerUser({username, password}))
            setPassword('')
            setUserName('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={s.box}>
            <form className={s.form} onSubmit={e => e.preventDefault()}>
                <h1>Регистрация</h1>
                <label>
                    Username:
                    <input type="text"
                           value={username}
                           onChange={e => setUserName(e.target.value)}
                           placeholder="Username"/>

                </label>
                <label>
                    Password:
                    <input type="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                           placeholder="Password"/>

                </label>
                <div className={s.btn}>
                    <button type="submit" onClick={handleSubmitReg}>
                        Подтвердить
                    </button>
                    <Link to="/login">Уже зарегестрированы?</Link>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Register