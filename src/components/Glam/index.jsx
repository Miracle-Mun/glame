import React from 'react';
import './glam.scss';
import { useLocation } from 'react-router-dom';
import Slides from '../../components/Slides';
import Slide1 from '../../components/Slide1';


const Glam = (props) => {
  const { pathname } = useLocation()
  return (
    <div className='glamimg'>
      <div className='women'><img src={pathname === '/client' ? '/assets/images/bg2.png' : '/assets/images/bg4.png'} className='girls' /></div>
      <div className='slides'>
        {
          pathname === '/client' ? (
            <Slides />
          ) :
            (
              <Slide1 />
            )
        }

      </div>
    </div>
  )
}
export default Glam;