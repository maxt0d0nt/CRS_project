import React from 'react'
import './Who.css';
import slider3 from '../../Imagenes/slider3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Who = () => {

  AOS.init({
    delay: 500, 
  duration: 1000
  });

  return (

    <>
    <div className='container-who' id='section-who'>
        <div className='row-who' data-aos="fade-right">
            <div className='square'> </div>
            <div className='circle-who'></div>
            <img className="image-who" src={slider3} alt="Third slide" id='imagen1'/>
        </div>

        <div className='row-who' data-aos="fade-left">
            <div className='descripcion-who'>
                <h2>¿Quienes Somos?</h2>
                <p>Somos una empresa de encomiendas internacionales que buscamos facilitar a nuestros clientes en el envio y entrega de sus paquetes desde un pais a otro. Nuestro personal altamente capacitado y profesional constituye la mejor garantía de calidad, eficiencia y rapidez en el servicio preferencial que diariamente se brinda a nuestros clientes.</p>

                <p>Contamos con una gran experiencia en las actividades de transporte y almacenamiento a nivel internacional.La base de la excelencia e integralidad en la prestación de nuestros servicios es lograda por las diferentes unidades de negocio de nuestra estructura.</p>
            </div>
        </div>
    </div>
    </>
  )
}
