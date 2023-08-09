import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import MenuNavbar from '../../components/Navbar/MenuNavbar'
import { addDoc, collection } from 'firebase/firestore';
import db from '../../config/db';
import Swal from 'sweetalert2';

export default function Contacto() {

  const contacto = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const asunto = event.target.asunto.value;
    const mensaje = event.target.mensaje.value;

    addDoc(collection(db, "contacto"), {
        name,email,asunto,mensaje
    }).then((docRef) => {
        console.log(docRef);
        Swal.fire({
            icon: 'success',
            text: 'Gracias por tus comentarios. Te responderemos lo antes posible',
        })
    })
}

  return (
    <>
    
    <div className="container-xxl position-relative p-0">
        <MenuNavbar />
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <Container className="text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Contacto</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">inicio</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Contacto</li>
              </ol>
            </nav>
          </Container>
        </div>
      </div>
    
      <div className="container-xxl py-5">
      <Container>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contacto</h5>
          <h1 className="mb-5">Estamos para escucharte</h1>
        </div>
        <Row className="g-4">
          <Col md={12}>
            <Row className="gy-4">
              <Col md={4}>
                <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                <p><i className="fa fa-envelope-open text-primary me-2"></i>info@mesareal.com</p>
              </Col>
              <Col md={4}>
                <h5 className="section-title ff-secondary fw-normal text-start text-primary">Queja o reclamo</h5>
                <p><i className="fa fa-envelope-open text-primary me-2"></i>serviciocliente@mesareal.com</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="wow fadeIn" data-wow-delay="0.1s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.394726546!2d-74.27261680580428!3d4.6486206278635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1690947722979!5m2!1ses!2sco"
              style={{ minHeight: '350px', border: '0' }}
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Col>
          <Col md={6}>
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <Form onSubmit={contacto}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Floating>
                      <Form.Control type="text" id="name" />
                      <label htmlFor="name">Nombre completo</label>
                    </Form.Floating>
                  </Col>
                  <Col md={6}>
                    <Form.Floating>
                      <Form.Control type="email" id="email" />
                      <label htmlFor="email">Correo</label>
                    </Form.Floating>
                  </Col>
                  <Col md={12}>
                    <Form.Floating>
                      <Form.Control type="text" id="asunto" />
                      <label htmlFor="asunto">Asunto</label>
                    </Form.Floating>
                  </Col>
                  <Col md={12}>
                    <Form.Floating>
                      <Form.Control as="textarea" id="mensaje" style={{ height: '150px' }} />
                      <label htmlFor="mensaje">Mensaje</label>
                    </Form.Floating>
                  </Col>
                  <Col md={12}>
                    <Button className="btn btn-warning w-100 py-3" type="submit">
                      Enviar mensaje
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <Footer />

    </>
  )
}
