import s from './Register.module.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {registerUser} from '../../../../store/features/auth/authSlice'
import {toast} from 'react-toastify'

const Register = () => {

    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const status = useSelector((state) => state.auth)
    console.log(status)
    const dispatch = useDispatch()

    useEffect(() =>{
        if (status){
            return toast(status)
        }
    }, [status])

    const handleSubmit = () =>{
        try {
            dispatch(registerUser({username,password}))
            setPassword('')
            setUserName('')
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.box}>
                <form className={s.form} onSubmit={e => e.preventDefault()}>
                    <h1>Регистрация</h1>
                    <label>
                        Username:
                        <input type="text"
                               value={username}
                               onChange={e => setUserName(e.target.value)}
                               placeholder='Username'/>

                    </label>
                    <label>
                        Password:
                        <input type="text"
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                               placeholder='Password'/>

                    </label>
                    <div className={s.btn}>
                        <button type='submit' onClick={handleSubmit}>
                            Подтвердить
                        </button>
                        <Link to='/login'>Уже зарегестрированы?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register