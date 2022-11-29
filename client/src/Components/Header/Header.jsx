import s from './Header.module.css'
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout} from '../../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import Auth from './Auth/Auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [modalActive, setModalActive] = useState(false)

    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из системы')
    }

  return(
      <div className={s.container}>
          <div className={s.auth}>
              {isAuth ? (
                  <button onClick={logoutHandler} className={s.btn}><FiUser/>Выйти</button>
              ) : (
                  <Link to={'/login'}><button onClick={()=>setModalActive(true)} className={s.btn}><FiUser/>Войти</button></Link>
              )}
          </div>
          <Auth active={modalActive} setActive={setModalActive}/>
      </div>
  )
}

export default Header