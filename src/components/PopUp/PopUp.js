import React from 'react';
import proximasfechas from '../../Imagenes/proximasfechas.jpg';
import './PopUp.css';

export const PopUp = ({ open, onClose}) => {

    if (!open) return null

  return (
    <>
    <div className='overlay-pop' onClick={onClose}/>
        <div className='container-pop'>
            <img className="d-block w-100" src={proximasfechas} alt="calendar" height="450px" />
        </div>
    
    </>
  )
}
