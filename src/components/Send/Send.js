import React from 'react';
import './Send.css';
import slider2 from '../../Imagenes/slider2.jpg';

export const Send = () => {
  return (
    <>
    <div className='container-send'>
        <div className='row-send'>
            <div className='descripcion'>
                <h2>¿Que Puedes Enviar?</h2>
                <p>Slorem ipsuum jdwjcebwko njdwckdodhcohc ldcncbjl</p>
            </div>
        </div>

        <div className='row-send'>
            <div className='square-send'> </div>
            <div className='circle-send'></div>
            <img className="image-send" src={slider2} alt="Third slide" id='imagen2'/>
        </div>
    </div>
    </>
  )
}
