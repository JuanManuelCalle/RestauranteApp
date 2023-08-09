import React from 'react'
import './Footer.css';
import { Button, Form } from 'react-bootstrap';
import { FaYoutube, FaFacebook, FaTwitter, FaMapLocationDot, FaPhone,  FaRegEnvelope } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Nosotros</h4>
            <Link to={'/'} className="btn btn-link">Home</Link>
            <Link to={'/menu'} className="btn btn-link">Menu</Link>
            <Link to={'/nosotros'} className="btn btn-link">Nosotros</Link>
            <Link to={'/contacto'} className="btn btn-link">Contactanos</Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Contactanos</h4>
            <p className="mb-2"><FaMapLocationDot className='me-3' />123 Calle Ejmplo, Bogotá, Colombia</p>
            <p className="mb-2"><FaPhone className='me-3' />+57 345 678900</p>
            <p className="mb-2"><FaRegEnvelope className='me-3' />info@mesareal.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><FaTwitter /></a>
              <a className="btn btn-outline-light btn-social" href=""><FaFacebook /></a>
              <a className="btn btn-outline-light btn-social" href=""><FaYoutube /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Horarios</h4>
            <h5 className="text-light fw-normal">Lunes - Viernes</h5>
            <p>9AM - 9PM</p>
            <h5 className="text-light fw-normal">Sabádos</h5>
            <p>10AM - 5PM</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-warning fw-normal mb-4">Recibe nuestros comunicados</h4>
            <p>Suscribete para recibir nuestras ofertas y noticias.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control border-warning w-100 py-3 ps-4 pe-5" type="text" placeholder="Tu correo" />
              <Button type="button" className="btn btn-warning py-2 position-absolute top-0 end-0 mt-2 me-2">Recibir</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
