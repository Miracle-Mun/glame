import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {

  return (
    <div className='homecontainer' >
      <img src='/assets/images/pinkleft.png' className='leftimg' />
      <img src='/assets/images/pinkright.png' className='rightimg' />
      <div className='homewrap'>
        <div className='homeleft'>
          <div className='homeleft1'>
            <div className='logo'><img src='/assets/images/logo.png' className='logos' /></div>
            <div className='be'>Be</div>
            <div className='glam'>GLAM</div>
          </div>
          <div className='homeleft2'>
            <div className='homeleft2img'><img src='/assets/images/pink1.png' className='pink1' /></div>
            <div className='who'>Who are you?</div>
          </div>
          <div className='homeleft3'>Be Glam, a beleza a três cliques de distância.</div>
          <div className='homeleft4'>
            <div className='btn1'>Sou profissional de beleza</div>
            <div className='btn2'>Quero Contratar uma profissional</div>
          </div>
          <div className='shape'><img src='/assets/images/violet.png' /></div>
        </div>
        <div className='homeright'>
          <img src='/assets/images/woman1.png' />
        </div>
      </div>
    </div>
  )

}
export default Home;

