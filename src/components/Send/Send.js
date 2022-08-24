import React from 'react';
import './Send.css';
import slider2 from '../../Imagenes/slider2.jpg';
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
                <p>Slorem ipsuum jdwjcebwko njdwckdodhcohc ldcncbjl</p>
            </div>
        </div>

        <div className='row-send' data-aos="fade-down-left">
            <div className='square-send'> </div>
            <div className='circle-send'></div>
            <img className="image-send" src={slider2} alt="Third slide" id='imagen2'/>
        </div>
    </div>
    </>
  )
}
