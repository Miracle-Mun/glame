import React from 'react';
import { useLocation } from 'react-router-dom';
import './download.scss';
import ScrollToTop from "react-scroll-to-top";

const Download = () => {
  const { pathname } = useLocation()

  return (
    <div className='downloadwrap' id='download'>

      <div className='downloadleft'>
        <div className='downloadleft_text'>
          {pathname === '/client' ? (
            <div className='downloadleft_text1'>
              Uma nova forma de contratar<br />
              serviços de <span className={pathname === '/client' ? 'redtext1' : 'redtext2'}>beleza e estética.</span>
            </div>
          ) : (
            <div className='downloadleft_text1'>
              Ganhe mais e conte com toda<br />
              <span className={pathname === '/client' ? 'redtext1' : 'redtext2'}>segurança e parceria </span>Be Glam.
            </div>
          )}
          {
            pathname === '/client' ? (
              <div className='downloadleft_text2'>Be Glam, a beleza a três cliques de distância.</div>
            ) :
              (
                <div className='downloadleft_text2'>Nossas profissionais Be Glam ganham até 35% a mais do que trabalhando autônomas</div>
              )
          }

          <div className={pathname === '/client' ? 'downloadbutton1' : 'downloadbutton2'}>
            {pathname === '/client' ? 'Baixar Agora' : 'Cadastrar'}
          </div>
        </div>
      </div>
      <div className='downloadright'>
        <div className='woman2'><img src={pathname === '/client' ? '/assets/images/woman2.png' : '/assets/images/woman6.png'} className='girl2' /></div>
      </div>

      <ScrollToTop smooth />
    </div>


  )
}
export default Download;