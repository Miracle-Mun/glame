import React from 'react';
import './agende.scss';
import { useLocation } from 'react-router-dom';

const Agende = () => {
  const { pathname } = useLocation()
  return (
    <div className='agende'>
      <div className='agendewrap'>
        <div className='woman3'><img src={pathname === '/client' ? '/assets/images/woman3.png' : '/assets/images/woman7.png'} className='girl3' /></div>
        {pathname === '/client' ? (
          <div className='agende_text'>
            <div className='agendetxt1'>Agende com um <br />profissional em minutos.</div>
            <div className='agendetxt2'>Dá um Be Glam na sua  Beleza!</div>
            <div className='agendebtn1'>Baixar agora </div>
          </div>
        ) :
          <div className='agende_text'>
            <div className='agendetxt1'>Ainda não tem <br />profissional em minutos. </div>
            <div className='agendetxt2'>Dá um Be Glam na sua Beleza!</div>
            <div className={pathname === '/client' ? 'agendebtn1' : 'agendebtn2'}>Solicitar crédito </div>
          </div>
        }
      </div>
    </div>
  )
}
export default Agende;