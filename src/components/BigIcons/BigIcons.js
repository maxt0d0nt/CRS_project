import React from 'react';
import './BigIcons.css';
import { BsCalendar2WeekFill } from "react-icons/bs";
import { FaArchive } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

export const BigIcons = () => {
  return (
    <>
    <div class="container-md-9">
      <div class="row">
        <div class="col">
          <div className='circule-container'>
            <div className='icon-circle'>
              <div className='icon-home'>
                < BsCalendar2WeekFill size={"5em"} color={"#0D31C0"}/>
              </div>        
            </div>
          </div>
          <div className='icon-title'>
            <h2>Proximas Fechas</h2>
          </div>
        </div>
        
        <div class="col">
        <div className='circule-container'>
            <div className='icon-circle'>
              <div className='icon-home'>
                < FaArchive size={"5em"} color={"#0D31C0"}/>
              </div>        
            </div>
          </div>
          <div className='icon-title'>
            <h2>¿Que Puedes Enviar?</h2>
          </div>
        </div>

        <div class="col">
        <div className='circule-container'>
            <div className='icon-circle'>
              <div className='icon-home'>
                < FaTruck size={"5em"} color={"#0D31C0"} />
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
