import React, { useEffect, useState } from 'react'
import MenuNavbar from '../../components/Navbar/MenuNavbar'
import { Container, Nav, Tab } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import { collection, getDoc, getDocs } from 'firebase/firestore';
import db from '../../config/db';

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    const completeMenu = [];
    getDocs(collection(db, 'menu'))
    .then((snap) => {
      snap.forEach((doc) => {
        completeMenu.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setMenu(completeMenu)
    })
  }, []);

  return (
    <>
      <div className="container-xxl position-relative p-0">
        <MenuNavbar />
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <Container className="text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Menú</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">inicio</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Menú</li>
              </ol>
            </nav>
          </Container>
        </div>
      </div>

      <div className="container-xxl py-5">
      <Container>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-warning fw-normal">Nuestro Menu</h5>
          <h1 className="mb-5">Comida popular</h1>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <Tab.Content>
            <Tab.Pane eventKey="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
              {
                menu.map((item) => (
                  <div className="col-lg-6" key={item.id}>
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 img-fluid rounded" src={item.data.image} alt="" style={{ width: '80px' }} />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{item.data.titulo}</span>
                          <span className="text-warning">{item.data.precio.toLocaleString("es-CO")}</span>
                        </h5>
                        <small className="fst-italic">{item.data.descripcion}</small>
                      </div>
                    </div>
                  </div>
                ))
              }
                </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Container>
    </div>

    <Footer />

    </>
  )
}
