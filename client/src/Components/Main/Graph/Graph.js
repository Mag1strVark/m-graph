import React, { useState, useRef, useCallback} from 'react'
import ReactFlow, {
    Controls,
    MiniMap,
    Background,
    useNodesState,
    useEdgesState,
    ReactFlowProvider,
    addEdge,
    MarkerType
} from 'reactflow'

import 'reactflow/dist/style.css'
import Navbar from './Sidebar/Navbar'
import TextUpdaterNode from './navbar/Create/TextUpdaterNode'
import s from './Graph.module.css'
import Sidebar from './navbar/Sidebar'
import Floating from './navbar/Create/Floating'
import CustomConnectionLine from './navbar/Create/CustomConnectionLine'


const nodeTypes = {textUpdater: TextUpdaterNode}

const initialNodes = []
const initialEdges = [];

const connectionLineStyle = {
    strokeWidth: 3,
    stroke: 'black',
};

const edgeTypes = {
    floating: Floating,
};

const defaultEdgeOptions = {
    style: { strokeWidth: 3, stroke: 'black' },
    type: 'floating',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'black',
    },
};

let id = 1
const getId = () => `Узел_${id++}`


const Graph = () => {
    const [activeSideBar, setActiveSideBar] = useState(false)
    const [reactFlowInstance, setReactFlowInstance] = useState(null)
    const reactFlowWrapper = useRef(null)
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

    const onDragOver = useCallback((event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
    }, [setEdges])

    const onDrop = useCallback(
        (event) => {
            event.preventDefault()

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
            const type = event.dataTransfer.getData('application/reactflow')

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top
            })
            const newNode = {
                id: getId(),
                type: 'textUpdater',
                position,
                data: {label: `${type} node`}
            }

            setNodes((nds) => nds.concat(newNode))
        },
        [reactFlowInstance]
    )


    return (
        <div className={s.container}>
            <Navbar setActiveS={setActiveSideBar}/>
            <div className={s.graph}>
                <ReactFlowProvider>
                    <div className={s.wrapper} ref={reactFlowWrapper}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            onInit={setReactFlowInstance}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                            edgeTypes={edgeTypes}
                            defaultEdgeOptions={defaultEdgeOptions}
                            connectionLineComponent={CustomConnectionLine}
                            connectionLineStyle={connectionLineStyle}
                            nodeTypes={nodeTypes}
                            fitView
                        >
                            <MiniMap zoomable pannable/>
                            <Controls/>
                            <Background color="#aaa" gap={16}/>
                        </ReactFlow>
                    </div>
                </ReactFlowProvider>
            </div>
            <Sidebar activeS={activeSideBar} setActiveS={setActiveSideBar}/>
        </div>
    )
}

export default Graph