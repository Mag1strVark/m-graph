import s from './App.module.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { BrowserRouter as Router} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from './redux/features/auth/authSlice'
import React from 'react'

const App = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMe())
    },[dispatch])

    return (
        <Router>
            <div className={s.app}>
                <Header/>
                <Main/>
                <ToastContainer/>
            </div>
        </Router>
    )
}

export default App
