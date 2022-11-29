import React from 'react'
import s from './Create.module.css'

const Create = () => {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType)
        event.dataTransfer.effectAllowed = 'move'
    }

    return (
        <aside>
            <div className={s.description}>Вы можете перетащить этот узел на доску.</div>
            <div className={s.dndnode} onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Узел
            </div>
        </aside>
    )
}

export default Create