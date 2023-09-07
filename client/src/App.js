import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/homepage" element={<HomePage/>}/>
      <Route path="/" element={<HomePage/>}/>
      
    </Routes>

    </BrowserRouter>
  )
};

export default App
