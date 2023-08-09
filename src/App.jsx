import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './pages/menu/Menu';
import Ubicacion from './pages/ubicacion/Ubicacion';
import Reserva from './pages/Reserva/Reserva';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/ubicacion' element={<Ubicacion />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/reserva' element={<Reserva />}/>
      </Routes>
  )
}

export default App
