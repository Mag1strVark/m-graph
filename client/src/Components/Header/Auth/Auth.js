import s from './Auth.module.css'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'

const Auth = ({active, setActive}) => {
    return (
        <div className={active ? s.container_active : s.container} onClick={() => setActive(false)}>
            <div className={active ? s.content_active : s.content} onClick={e => e.stopPropagation()}>
              <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
              </Routes>
            </div>
        </div>
    )
}

export default Auth