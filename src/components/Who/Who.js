import React from 'react'
import './Who.css';
import slider3 from '../../Imagenes/slider3.jpg';


export const Who = () => {


  return (

    <>
    <div className='container-who' id='section-who'>
        <div className='row-who'>
            <div className='square'> </div>
            <div className='circle-row'></div>
            <img className="image-who" src={slider3} alt="Third slide" id='imagen1'/>
        </div>

        <div className='row-who'>
            <div className='descripcion'>
                <h2>¿Quienes Somos?</h2>
                <p>Slorem ipsuum jdwjcebwko njdwckdodhcohc ldcncbjl</p>
            </div>
        </div>
    </div>
    </>
  )
}
