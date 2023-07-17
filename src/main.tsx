import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { WindowContextProvider } from './context/WindowContext'
import router from './router'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WindowContextProvider>
            <RouterProvider router={router}/>
        </WindowContextProvider>
    </React.StrictMode>,
)