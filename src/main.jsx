import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro.jsx'
import Adm from './pages/Adm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Adm" element={<Adm />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)