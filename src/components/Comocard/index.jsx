import React from 'react';
import './comocard.scss';
import { useLocation } from 'react-router-dom';

const Comocard = (props) => {
  const { pathname } = useLocation()
  return (
    <div className='comocardwrap'>
      {
        pathname === '/client' ? (
          <img src={props.items.img} className='comocardimg' />
        ) :
          (
            <img src={props.items.img1} className='comocardimg' />
          )
      }

      <div className='comtitle'>{props.items.title}</div>
    </div>
  )
}
export default Comocard;