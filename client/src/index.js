import React from 'react'
import './index.css'
import App from './App'
import ReactDOM from 'react-dom/client'
import { Normalize } from 'styled-normalize'
import { Provider, useDispatch } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <Normalize/>
        <App/>
    </Provider>
)


