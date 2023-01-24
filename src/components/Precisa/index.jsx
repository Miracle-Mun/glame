import React from 'react';
import './precisa.scss';
import { useLocation } from 'react-router-dom';

const Precisa = () => {
  const { pathname } = useLocation()
  return (
    <div className='precisa'>
      <div className='woman4'><img src={pathname === '/client' ? './assets/images/woman4.png' : './assets/images/woman8.png'} className='girl4' /></div>
      {pathname === '/client' ? (
        <div className='precisa_text'>
          <div className='precisatxt1'>Precisa de um <br />profissional agora?</div>
          <div className='precisatxt2'>Na Be Glam temos profissionais à <br />disposição para atendimento em até <br />30 minutos. </div>
          <div className='precisabtn1'>Baixar agora </div>
        </div>
      ) :
        <div className='precisa_text'>
          <div className='precisatxt1'>Quer ganhar mais?</div>
          <div className='precisatxt2'>Dá um Be Glam na sua carreira e viva sua melhor fase</div>
          <div className={pathname === '/client' ? 'precisabtn1' : 'precisabtn2'}>Baixar agora </div>
        </div>
      }

    </div>
  )
}
export default Precisa;