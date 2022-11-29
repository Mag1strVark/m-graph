import s from './TextUpdaterNode.module.css'
import { useCallback } from 'react'
import { memo } from 'react';
import { Handle, Position, useStore, } from 'reactflow'

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const TextUpdaterNode = ({id, data}) => {

    const connectionNodeId = useStore(connectionNodeIdSelector);
    const isTarget = connectionNodeId && connectionNodeId !== id;
    const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };
    const label = isTarget ? 'Присоединить' : id;
    //==============================================================

    return (
        <div className={s.customNode}>
            <div className={s.customNodeBody} style={{borderStyle: isTarget ? 'dashed' : 'solid', backgroundColor: isTarget ? '#ffcce3' : '#ccd9f6'}}>
                <Handle
                    className={s.sourceHandle}
                    style={{ zIndex: 2 }}
                    position={Position.Right}
                    type="source"
                />
                <Handle
                    className={s.targetHandle}
                    style={targetHandleStyle}
                    position={Position.Left}
                    type="target"
                />
                {label}
            </div>
        </div>
    )
}

export default memo(TextUpdaterNode)