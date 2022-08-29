import React from 'react';
import './Send.css';
import Travel from '../../Imagenes/Travel.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Send = () => {

  AOS.init({
    delay: 500, 
  duration: 1000
  });

  return (
    <>
    <div className='container-send' id='section-send'>
        <div className='row-send' data-aos="fade-down-right">
            <div className='descripcion'>
                <h2>¿Que Puedes Enviar?</h2>
                <p>Hacemos envios de alimentos, medicamentos, equipos electronicos, documentos, ariculos de higiene personal, vestimenta, entre otros</p>
            </div>
        </div>

        <div className='row-send' data-aos="fade-down-left">
           
            <img className="image-send" src={Travel} alt="Third slide" id='imagen2'/>
        </div>
    </div>
    </>
  )
}
