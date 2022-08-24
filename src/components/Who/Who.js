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
                <p>Slorem ipsuum jdwjcebwko njdwckdodhcohc ldcncbjl</p>
            </div>
        </div>
    </div>
    </>
  )
}
