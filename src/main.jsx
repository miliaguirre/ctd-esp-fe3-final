/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import Globalcontext from './Components/utils/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Globalcontext>
            <App/>
        </Globalcontext>
    </BrowserRouter>
)