import React from 'react';
import { useLocation } from 'react-router-dom';
import './download.scss';
import ScrollToTop from "react-scroll-to-top";

const Download = (props) => {
  const { pathname } = useLocation()
  return (
    <div className='downloadwrap'>
      <div className='downloadcontainer'>
        <div className='downloadleft'>
          <div className='downloadleft_text'>
            {pathname === '/client' ? (
              <div className='downloadleft_text1'>
                Uma nova forma de contratar<br />
                serviços de <span className='redtext'>beleza e estética.</span>
              </div>
            ) : (
              <div className='downloadleft_text1'>
                Ganhe mais e conte com toda<br />
                <span className='redtext'>segurança e parceria </span>Be Glam.
              </div>
            )}

            <div className='downloadleft_text2'>Be Glam, a beleza a três cliques de distância.</div>
            <div className={pathname === '/cient' ? 'downloadbutton1' : 'downloadbutton2'}>
              {pathname === '/client' ? 'Baixar Agora' : 'Cadastrar'}
            </div>
          </div>
        </div>
        <div className='downloadright'>
          <div className='woman2'><img src={pathname === '/client' ? './assets/images/woman2.png' : './assets/images/woman6.png'} className='girl2' /></div>
        </div>
      </div>
      <ScrollToTop smooth />
    </div>


  )
}
export default Download;