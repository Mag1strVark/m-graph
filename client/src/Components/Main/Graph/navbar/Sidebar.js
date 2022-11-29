import s from './Sidebar.module.css'
import { Routes } from 'react-router'
import Create from './Create/Create'
import Edit from './Edit/Edit'
import { Route } from 'react-router-dom'
import Search from './Search/Search'
import Export from './Export/Export'
import Delete from './Delete/Delete'
import Settings from './Settings/Settings'
import { HiOutlineX } from "react-icons/hi";

const Sidebar = ({activeS, setActiveS}) => {
    return (
        <div className={activeS? s.container_nav : s.container_nav_na} onClick={() => setActiveS(false)}>
            <div className={s.close}>
                <button onClick={() => setActiveS(false)}><HiOutlineX/></button>
            </div>
            <Routes>
                <Route path="/create" element={<Create/>}/>
                <Route path="/edit" element={<Edit/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/export" element={<Export/>}/>
                <Route path="/delete" element={<Delete/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </div>
    )
}

export default Sidebar