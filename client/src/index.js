import React from 'react'
import './index.css'
import App from './App'
import ReactDOM from 'react-dom'
import { Normalize } from 'styled-normalize'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const Root = () => (
    <Provider store={store}>
        <Normalize/>
        <App/>
    </Provider>
)

ReactDOM.render(<Root/>, document.querySelector('#root'))

