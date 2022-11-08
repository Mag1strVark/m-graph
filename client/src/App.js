import s from './App.module.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Header/Auth/Login/Login'
import Register from './Components/Header/Auth/Register/Register'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from './store/features/auth/authSlice'

const App = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMe)
    },[])
    return (
        <Router>
            <div className={s.app}>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                </Routes>
                <ToastContainer />
            </div>
        </Router>
    )
}

export default App
