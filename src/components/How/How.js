import React from 'react';
import './How.css';
import slider1 from '../../Imagenes/slider1.jpg';


export const How = () => {
  return (
    <>
    <div className='container-how' id='section-how'>
        <div className='row-how'>
            <div className='square-how'> </div>
            <div className='circle-how'></div>
            <img className="image-how" src={slider1} alt="Third slide" id='imagen1'/>
        </div>

        <div className='row-how' >
            <div className='descripcion'>
                <h2>¿Como Enviar?</h2>
                <p>Retiramos el pedido por tu domicilio</p>
                <p>Pasamos a buscar el paquete por tu casa en cualquier punto del país y sin costo adicional o podés acercarlo a una sucursal u oficina de las empresas de logística asociadas.</p>
            </div>
        </div>
    </div>
    </>
  )
}
