import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import platoImage from '/img/hero.png'
import './Nosotros.css'
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa6";
import MenuNavbar from '../../components/Navbar/MenuNavbar';
import Footer from '../../components/Footer/Footer';


export default function Nosotros() {
  return (
    <>
    
    <div className="container-xxl position-relative p-0">
      <MenuNavbar />
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <Container className="text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Nosotros</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><a href="#">inicio</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Nosotros</li>
            </ol>
          </nav>
        </Container>
      </div>
    </div>
    <div className="container-xxl py-5">
    <Container>
      <Row className="g-5 align-items-center">
        <Col lg={6}>
          <Row className="g-3">
            <Col xs={6} className="text-start">
              <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="/img/about-1.jpg" alt="About 1" />
            </Col>
            <Col xs={6} className="text-start">
              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="/img/about-2.jpg" alt="About 2" style={{ marginTop: '25%' }} />
            </Col>
            <Col xs={6} className="text-end">
              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="/img/about-3.jpg" alt="About 3" />
            </Col>
            <Col xs={6} className="text-end">
              <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="/img/about-4.jpg" alt="About 4" />
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <h5 className="section-title ff-secondary text-start text-warning fw-normal">Sobre nosotros</h5>
          <h1 className="mb-4">¡Bienvenido a La Mesa Real!</h1>
          <p className="mb-4">Un lugar mágico donde los sabores se fusionan con la elegancia en cada plato. Descubre nuestra exquisita selección de delicias culinarias que te transportarán a un banquete real. ¡Siente la realeza en cada bocado!</p>
          <p className="mb-4">"Deléitate con la realeza de los sabores en La Mesa Real: donde la innovación culinaria se encuentra con la magia de los sentidos."</p>
          <Row className="g-4 mb-4">
            <Col sm={6}>
              <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                <h1 className="flex-shrink-0 display-5 text-warning mb-0" data-toggle="counter-up">15</h1>
                <div className="ps-4">
                  <p className="mb-0">Años de</p>
                  <h6 className="text-uppercase mb-0">Experiencia</h6>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                <h1 className="flex-shrink-0 display-5 text-warning mb-0" data-toggle="counter-up">50</h1>
                <div className="ps-4">
                  <p className="mb-0">Populares</p>
                  <h6 className="text-uppercase mb-0">Maestros de la cocina</h6>
                </div>
              </div>
            </Col>
          </Row>
          <Button className="btn btn-warning py-3 px-5 mt-2" href="">Ver más</Button>
        </Col>
      </Row>
    </Container>
  </div>

  <div className="container-xxl pt-5 pb-3">
      <Container>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">Equipo</h5>
          <h1 className="mb-5">Nuestros cocineros</h1>
        </div>
        <Row className="g-4">
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
              </div>
              <h5 className="mb-0">David</h5>
              <small>Cocinero</small>
              <div className="d-flex justify-content-center mt-3">
                <Button className="btn-square btn-warning mx-1"><FaFacebook/></Button>
                <Button className="btn-square btn-warning mx-1"><FaTwitter /></Button>
                <Button className="btn-square btn-warning mx-1"><FaYoutube /></Button>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
              </div>
              <h5 className="mb-0">Antonio</h5>
              <small>Maestro de cocina</small>
              <div className="d-flex justify-content-center mt-3">
                <Button className="btn-square btn-warning mx-1"><FaFacebook/></Button>
                <Button className="btn-square btn-warning mx-1"><FaTwitter /></Button>
                <Button className="btn-square btn-warning mx-1"><FaYoutube /></Button>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
              </div>
              <h5 className="mb-0">Oscar</h5>
              <small>Ayudante de cocina</small>
              <div className="d-flex justify-content-center mt-3">
                <Button className="btn-square btn-warning mx-1"><FaFacebook/></Button>
                <Button className="btn-square btn-warning mx-1"><FaTwitter /></Button>
                <Button className="btn-square btn-warning mx-1"><FaYoutube /></Button>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src="img/team-4.jpg" alt="" />
              </div>
              <h5 className="mb-0">Raúl</h5>
              <small>Cocinero</small>
              <div className="d-flex justify-content-center mt-3">
                <Button className="btn-square btn-warning mx-1"><FaFacebook/></Button>
                <Button className="btn-square btn-warning mx-1"><FaTwitter /></Button>
                <Button className="btn-square btn-warning mx-1"><FaYoutube /></Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  <Footer />
  </>
  )
}
