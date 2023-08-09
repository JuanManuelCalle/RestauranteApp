import React from 'react'
import { Button, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import './Reservacion.css';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../config/db';
import Swal from 'sweetalert2';

export default function Reservacion() {

    const reservar = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const fecha = event.target.fecha.value;
        const numeroPersonas = event.target.numeroPersonas.value;
        const mensaje = event.target.mensaje.value;

        addDoc(collection(db, "reservaciones"), {
            name,email,fecha,numeroPersonas,mensaje
        }).then((docRef) => {
            console.log(docRef.id);
            Swal.fire({
                icon: 'success',
                text: `¡Tu reservación fue exitosa, Aca tienes el id de tu reserva ${docRef.id}, guardalo para consultar tu reserva`,
            })
        })
    }

  return (
    <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <Row className="g-0">
        <Col md={6}>
            <div className="video">
            <Button
                variant="link"
                className="btn-play">
                <span></span>
            </Button>
            </div>
        </Col>
        <Col md={6} className="bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
            <h5 className="section-title ff-secondary text-start text-warning fw-normal">Reservación</h5>
            <h1 className="text-white mb-4">Reserva online</h1>
            <Form onSubmit={reservar}>
                <Row className="g-3">
                <Col md={6}>
                    <FloatingLabel controlId="name" label="Nombre">
                    <Form.Control type="text" placeholder="Ingresa tu nombre" />
                    </FloatingLabel>
                </Col>
                <Col md={6}>
                    <FloatingLabel controlId="email" label="Correo">
                    <Form.Control type="email" placeholder="Ingresa tu correo" />
                    </FloatingLabel>
                </Col>
                <Col md={6}>
                    <FloatingLabel controlId="fecha" label="Fecha de reserva">
                    <Form.Control
                        type="date"
                    />
                    </FloatingLabel>
                </Col>
                <Col md={6}>
                    <FloatingLabel controlId="numeroPersonas" label="Nro Personas">
                    <Form.Control type="number" placeholder="Ingresa el numero de personas" />
                    </FloatingLabel>
                </Col>
                <Col xs={12}>
                    <FloatingLabel controlId="mensaje" label="Mensaje">
                    <Form.Control as="textarea" placeholder="Mensaje" style={{ height: '100px' }} />
                    </FloatingLabel>
                </Col>
                <Col xs={12}>
                    <Button className="btn btn-warning w-100 py-3" type="submit">Reserva ahora</Button>
                </Col>
                </Row>
            </Form>
            </div>
        </Col>
        </Row>
    </div>
)
}
