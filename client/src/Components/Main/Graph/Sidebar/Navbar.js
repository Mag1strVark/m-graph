import s from './Navbar.module.css'
import { HiOutlineSquares2X2,HiOutlinePlus,HiOutlineShare,HiOutlineQuestionMarkCircle,HiOutlinePencil,HiOutlineMagnifyingGlass,HiOutlineArrowUturnLeft,HiOutlineArrowUturnRight,HiOutlineInbox,HiOutlineXMark,HiOutlineCog8Tooth } from 'react-icons/hi2'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setActiveS}) => {
    const [active, setActive] = useState(true)

    const showSideBar = () => setActive(!active)

    return (
        <div className={active ? s.container_active : s.container_not_active}>
            <div className={active ? s.menu_active : s.menu_not_active}>
                <div className={s.main_menu}>
                    <h1>Инструменты:</h1>
                    <Link to={'/create'}><button onClick={() => setActiveS(true)}><HiOutlinePlus/>Создать</button></Link>
                    <Link to={'/edit'}><button onClick={() => setActiveS(true)}><HiOutlinePencil/>Редактировать</button></Link>
                    {/*<Link to={'/search'}><button onClick={() => setActiveS(true)}><HiOutlineMagnifyingGlass/>Поиск</button></Link>*/}
                    <button><HiOutlineArrowUturnLeft/>Отмена</button>
                    <button><HiOutlineArrowUturnRight/>Вернуть</button>
                    <Link to={'/export'}><button onClick={() => setActiveS(true)}><HiOutlineInbox/>Экспортировать</button></Link>
                    {/*<Link to={'/delete'}><button onClick={() => setActiveS(true)}><HiOutlineXMark/>Удалить</button></Link>*/}
                    <Link to={'/settings'}><button onClick={() => setActiveS(true)}><HiOutlineCog8Tooth/>Настройки</button></Link>
                    <button><HiOutlineShare/>Справка</button>
                </div>
                <div className={s.drop_menu}>
                    <button><HiOutlineQuestionMarkCircle/>Помощь</button>
                </div>
            </div>
            <div className={active ? s.icons_active : s.icons_not_active}>
                <button onClick={showSideBar}><HiOutlineSquares2X2/></button>
            </div>
        </div>
    )
}

export default Navbar