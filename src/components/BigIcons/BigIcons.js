import React, {useState} from 'react';
import './BigIcons.css';
import { BsCalendar2WeekFill } from "react-icons/bs";
import { FaArchive } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { PopUp } from '../PopUp/PopUp';
import './BigIcons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const BigIcons = () => {

  AOS.init({
    delay: 500, 
  duration: 1000
  });

const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div class="container-md-9">
    <PopUp open={isOpen} onClose={() => setIsOpen(false)} /> 
      <div class="row">
        <div class="col" data-aos="flip-up">
          <div className='circule-container'>
            <div className='icon-circle'>
              <div className='icon-home'>
                < BsCalendar2WeekFill size={"5em"} color={"#0D31C0"} onClick={() => setIsOpen(true)} />
              </div> 
            </div>
          </div>
          <div className='icon-title'>
            <h2>Proximas Fechas</h2>
          </div>
        </div>
        
        <div class="col" data-aos="flip-up">
        <div className='circule-container'>
          <div className='icon-circle'>
            <a href='#section-send'>
              <div className='icon-home'>
                < FaArchive size={"5em"} color={"#0D31C0"}/>
              </div> 
            </a>       
          </div>
        </div>
        
          <div className='icon-title'>
            <h2>¿Que Puedes Enviar?</h2>
          </div>
        </div>

        <div class="col" data-aos="flip-up">
        <div className='circule-container'>
            <div className='icon-circle'>
              <div className='icon-home'>
                <a href='#section-how'>
                < FaTruck size={"5em"} color={"#0D31C0"} />
                </a>
              </div>        
            </div>
          </div>
          <div className='icon-title'>
            <h2>¿Como Enviar?</h2>
          </div>
        </div>
    
      </div>
    </div>
    </>
  )
}
