import s from './MindMode.module.css'
import 'reactflow/dist/style.css'
import React, { useState, useCallback } from 'react'
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow,
    Controls,
    Background,
    MiniMap
} from 'reactflow'
import 'reactflow/dist/style.css'

const flowKey = 'example-flow'

const getNodeId = () => `randomnode_${+new Date()}`

const initialNodes = []

const initialEdges = []

const Graph = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
    const [rfInstance, setRfInstance] = useState(null)
    const {setViewport} = useReactFlow()

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])
    const onSave = useCallback(() => {
        if (rfInstance) {
            const flow = rfInstance.toObject()
            localStorage.setItem(flowKey, JSON.stringify(flow))
        }
    }, [rfInstance])

    const onRestore = useCallback(() => {
        const restoreFlow = async () => {
            const flow = JSON.parse(localStorage.getItem(flowKey))

            if (flow) {
                const {x = 0, y = 0, zoom = 1} = flow.viewport
                setNodes(flow.nodes || [])
                setEdges(flow.edges || [])
                setViewport({x, y, zoom})
            }
        }

        restoreFlow()
    }, [setNodes, setViewport])

    const onAdd = useCallback(() => {
        const newNode = {
            id: getNodeId(),
            data: {label: 'Added node'},
            position: {
                x: Math.random() * window.innerWidth - 100,
                y: Math.random() * window.innerHeight
            }
        }
        setNodes((nds) => nds.concat(newNode))
    }, [setNodes])


    return (
        <div className={s.container} style={{height: '100%', width: '100%'}}>
            <ReactFlow nodes={nodes}
                       edges={edges}
                       onNodesChange={onNodesChange}
                       onEdgesChange={onEdgesChange}
                       onConnect={onConnect}
                       onInit={setRfInstance}>
                <Background/>
                <Controls/>
                <MiniMap/>
            </ReactFlow>
            <div className={s.sidebar}>
                <div className={s.restore}>
                    <button onClick={onSave}>save</button>
                    <button onClick={onRestore}>restore</button>
                    <button onClick={onAdd}>add node</button>
                </div>
                <div className={s.update}>
                    <label>hidden:</label>
                    <input
                    />
                </div>
            </div>
        </div>
    )
}

export default () => (
    <ReactFlowProvider>
        <Graph />
    </ReactFlowProvider>
);