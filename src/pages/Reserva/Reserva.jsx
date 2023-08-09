import React from 'react'
import { Container } from 'react-bootstrap'
import MenuNavbar from '../../components/Navbar/MenuNavbar'
import Reservacion from '../../components/Reservacion/Reservacion'
import Footer from '../../components/Footer/Footer'

export default function Reserva() {
  return (
    <>
    
    <div className="container-xxl position-relative p-0">
        <MenuNavbar />
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <Container className="text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Reservar</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">inicio</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Reserva</li>
              </ol>
            </nav>
          </Container>
        </div>
      </div>

      <Reservacion />

      <Footer />

    </>
  )
}
