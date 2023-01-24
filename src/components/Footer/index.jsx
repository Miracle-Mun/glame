import React from 'react';
import './footer.scss';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation()
  return (
    <div className='footerwrap'>
      <div className='footerleft'>
        <div className='footerleft_text'>Redes Sociais</div>
        <div className='soicals'>
          <img src={pathname === '/client' ? '/assets/images/facebook.png' : '/assets/images/facebook1.png'} />
          <img src={pathname === '/client' ? '/assets/images/instagram.png' : '/assets/images/instagram1.png'} />
          <img src={pathname === '/client' ? '/assets/images/tictok.png' : '/assets/images/tictok1.png'} />
        </div>
      </div>
      <div className='footerright'>
        <div className='footerright_text'>Novidades</div>
        <div className='emailbtn'>
          <div className='emails'>
            <input type='text' className='email1' placeholder='Name' />
            <input type='text' className='email2' placeholder='Email' />

          </div>
          <div className={pathname === '/client' ? 'emtbtn1' : 'emtbtn2'}>Enviar</div>
        </div>
      </div>
    </div>

  )
}
export default Footer;