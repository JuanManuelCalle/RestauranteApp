import React from 'react'
import MenuNavbar from '../../components/Navbar/MenuNavbar'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import platoImage from '/img/hero.png'
import { FaUserTie, FaUtensils, FaCartShopping, FaHeadphonesSimple } from "react-icons/fa6";
import Reservacion from '../../components/Reservacion/Reservacion';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';



export default function Home() {
  return (
    <>
        <div className="container-xxl position-relative p-0">
            <MenuNavbar />
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <Container className="my-5 py-5">
                    <Row className="align-items-center g-5">
                    <Col lg={6} className="text-center text-lg-start">
                        <h1 className="display-3 text-white animated slideInLeft">Disfruta de Nuestra<br />Deliciosa Comida</h1>
                        <p className="text-white animated slideInLeft mb-4 pb-2">En La Mesa Real, nos enorgullecemos de ofrecer una experiencia culinaria única y excepcional. Nuestro equipo de chefs apasionados utiliza solo los ingredientes más frescos y de la más alta calidad para preparar platos deliciosos que deleitarán tu paladar.</p>
                        <Link to={'reserva'}><Button className="btn-warning py-sm-3 px-sm-5 me-3 animated slideInLeft">Reservar una mesa</Button></Link>
                    </Col>
                    <Col lg={6} className="text-center text-lg-end overflow-hidden">
                        <img className="img-fluid" src={platoImage} alt="" />
                    </Col>
                    </Row>
                </Container>
            </div>
        </div>
        
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded pt-3">
                    <div className="p-4 cPointer">
                        <FaUserTie className='text-warning mb-4 icon3x' />
                        <h5>Chefs de alta calidad</h5>
                        <p>En nuestro restaurante, contamos con un equipo de chefs de alta calidad que son verdaderos maestros culinarios.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded pt-3">
                    <div className="p-4 cPointer">
                        <FaUtensils className='text-warning mb-4 icon3x' />
                        <h5>Comida de calidad</h5>
                        <p>En nuestro restaurante, la calidad de la comida es nuestra máxima prioridad.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded pt-3">
                    <div className="p-4 cPointer">
                        <FaCartShopping className='text-warning mb-4 icon3x' />
                        <h5>Ordena Online</h5>
                        <p>Ordenar online en nuestro restaurante es rápido y conveniente.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item rounded pt-3">
                    <div className="p-4 cPointer">
                        <FaHeadphonesSimple className='text-warning mb-4 icon3x' />
                        <h5>Servicio 24 horas</h5>
                        <p>Nuestro restaurante ofrece un excepcional servicio las 24 horas del día.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <Reservacion />
        <Footer />
    </>
  )
}
