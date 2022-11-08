import { useState } from '@types/react'
import s from '../Header/Header.module.css'
import { FiUser } from 'react-icons/fi'
import Login from '../Header/Auth/Login/Login'

const modal = () => {
    const [modalActive, setModalActive] = useState(false)

    return(
        <div className={s.container}>
            <div className={s.auth}>
                <button onClick={()=>setModalActive(true)}>
                    <FiUser/>
                </button>
            </div>
            <Login active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default modal