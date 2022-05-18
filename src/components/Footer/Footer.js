import React from 'react';
import './Footer.css';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
    <div className='container-footer' id="section-contact">
      <div class="grid-footer">
        <div class="g-col-6 g-col-md-4">
          <h3>Contactanos</h3>
          <h4>Argentina</h4>
          <p-1>WhatsApp < AiOutlineWhatsApp /></p-1>
          <p>+54 11-555-5555</p>
          <p-1>E-mail < AiOutlineMail /></p-1>
          <p>mail@crs.com</p>
          <h4>Chile</h4>
          <p>WhatsApp < AiOutlineWhatsApp /></p>
          <p>+54 11-555-5555</p>
          <p>E-mail < AiOutlineMail /></p>
          <p>mail@crs.com</p>
          <h4>Venezuela</h4>
          <p>WhatsApp < AiOutlineWhatsApp /></p>
          <p>+54 11-555-5555</p>
          <p>E-mail < AiOutlineMail /></p>
          <p>mail@crs.com</p>
        </div>
        <div class="g-col-6 g-col-md-4">
        <h2>Oficinas</h2>
          <h4>Argentina</h4>
          <p-1>Calle siempre viva 4567</p-1>
          <p>Buenos Aires, CABA</p>
          <p>CP 1431</p>
          <h4>Chile</h4>
          <p-1>Calle siempre viva 4567</p-1>
          <p>Buenos Aires, CABA</p>
          <p>CP 1431</p>
          <h4>Venezuela</h4>
          <p-1>Calle siempre viva 4567</p-1>
          <p>Buenos Aires, CABA</p>
          <p>CP 1431</p>
        </div>
        <div class="g-col-6 g-col-md-4">
        <h2>Redes Sociales</h2>
        <div className='icon'>
        <a href="https://www.instagram.com/crsencomiendas/?hl=en" target="_blank">
        < AiOutlineInstagram size={"60px"} />
        </a>
        </div>
        <div className='icon'>
          < AiOutlineFacebook size={"60px"} />
        </div>
        <div className='icon'>
          < AiOutlineWhatsApp size={"60px"} />
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
