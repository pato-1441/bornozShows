import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { firestoreInit } from './firebase/config'
import './index.css'

firestoreInit();

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
