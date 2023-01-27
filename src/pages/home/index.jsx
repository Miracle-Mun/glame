import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {
  return (
    <div className='homecontainer' >
      <div className='homewrap'>
        <div className='homeleft'>
          <div className='lefttext'>
            <div className='glam'>
              <img src='/assets/images/logo.png' alt='' className='logo' />
              <div className='be'>Be</div>
              <div className='glamtext'>GLAM</div>
            </div>
            <div className='who'>
              <div className='circle'><img src='/assets/images/pink1.png' alt='' /></div>
              <div className='whotext'>Who are you?</div>
            </div>
            <div className='beglamtext'>Be Glam, a beleza a três cliques de distância.</div>
            <Link to='profession' className='button'><div className='button1'>Sou profissional de beleza</div></Link>
            <Link to='client' className='button'><div className='button2'>Quero Contratar uma profissional</div></Link>
            <div className='shape'><img src='/assets/images/violet.png' alt='' /></div>
          </div>
        </div>
        <div className='homeright'>
          <div>
            <div className='woman1'>
              <img src='/assets/images/woman1.png' className='girl1' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Home;

