import s from './Header.module.css'
import { FiUser } from "react-icons/fi";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../../store/features/auth/authSlice'

const Header = () => {
    const isAuth = false
  return(
      <div className={s.container}>
          <div className={s.auth}>
              {isAuth ? (
                  <button className={s.btn}><FiUser/>(Выйти)</button>
              ) : (
                  <Link to={'/login'}><button className={s.btn}><FiUser/>(Войти)</button></Link>
              )}
          </div>
      </div>
  )
}

export default Header