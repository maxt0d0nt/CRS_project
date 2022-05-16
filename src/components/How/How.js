import React from 'react';
import './How.css';
import slider1 from '../../Imagenes/slider1.jpg';


export const How = () => {
  return (
    <>
    <div className='container-how'>
        <div className='row-how'>
            <div className='square-how'> </div>
            <div className='circle-how'></div>
            <img className="image-how" src={slider1} alt="Third slide" id='imagen1'/>
        </div>

        <div className='row-how'>
            <div className='descripcion'>
                <h2>¿Como Enviar?</h2>
                <p>Slorem ipsuum jdwjcebwko njdwckdodhcohc ldcncbjl</p>
            </div>
        </div>
    </div>
    </>
  )
}
