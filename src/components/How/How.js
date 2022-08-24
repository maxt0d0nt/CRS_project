import React from 'react';
import './How.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import slider1 from '../../Imagenes/slider1.jpg';


export const How = () => {

  AOS.init({
    delay: 0, 
  duration: 500
  });

  return (
    <>
    <div className='container-how' id='section-how'>
        <div className='row-how' data-aos="zoom-in">
            <div className='square-how'> </div>
            <div className='circle-how'></div>
            <img className="image-how" src={slider1} alt="Third slide" id='imagen1'/>
        </div>

        <div className='row-how' data-aos="zoom-in-up">
            <div className='descripcion-how'>
                <h2>¿Como Enviar?</h2>
                <p>Retiramos el pedido por tu domicilio</p>
                <p>Pasamos a buscar el paquete por tu casa en cualquier punto del país y sin costo adicional o podés acercarlo a una sucursal u oficina de las empresas de logística asociadas.</p>
            </div>
        </div>
    </div>
    </>
  )
}
