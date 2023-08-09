import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaBarsStaggered,FaUtensils } from "react-icons/fa6";
import './Navbar.css';
import './Navbar.js';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import db from '../../config/db';
import { doc, getDoc } from 'firebase/firestore';


export default function MenuNavbar() {

  const mostrarReserva = async () => {
    const { value: idReserva } = await Swal.fire({
      title: 'Reserva',
      input: 'text',
      inputLabel: 'Ingresa el id de tu reserva',
      inputPlaceholder: 'Id de reserva'
    });

    if (idReserva) {
      const docRef = doc(db, "reservaciones", idReserva);
      const docSnap = await getDoc(docRef);

      console.log(docSnap.data());

      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log(data);
        Swal.fire({
          title: 'Datos de tu reserva ',
          html: `
            <table class="data-table">
              <thead>
                  <tr>
                      <th>Id Reserva</th>
                      <th>Fecha</th>
                      <th>Correo</th>
                      <th>Nombre</th>
                      <th>NroPersonas</th>
                      <th>Mensaje</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>${idReserva}</td>
                      <td>${data.fecha}</td>
                      <td>${data.email}</td>
                      <td>${data.name}</td>
                      <td>${data.numeroPersonas}</td>
                      <td>${data.mensaje}</td>
                  </tr>
              </tbody>
            </table>
          `,
          customClass: 'swal-wide',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'ID no válido',
        });
      }
    }
  };


  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4 px-lg-5 py-3 py-lg-0">
      <Navbar.Brand>
        <Link to={'/'} className='br_none'>
          <h1 className="text-warning m-0">
          <img src="/img/logoPrincipal.png" alt="Logo principal" /> La mesa Real
          </h1>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse">
        <FaBarsStaggered/>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ms-auto py-0 pe-4">
          <Link to={'/'} className="nav-item nav-link active">Home</Link>
          <Link to={'/menu'} className="nav-item nav-link">Menu</Link>
          <Link to={'/nosotros'} className="nav-item nav-link">Nosotros</Link>
          <Link to={'/contacto'} className="nav-item nav-link">Contactanos</Link>
          <Link to={'/reserva'} className="nav-item nav-link">Reservar mesa</Link>
        </Nav>
        <Button onClick={mostrarReserva} variant="warning" className="py-2 px-4">Consultar reserva</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}
