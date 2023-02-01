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

      {
        pathname === '/client' ? (
          <div className='comtitle'>{props.items.title}</div>
        )
          :
          (
            <div className='comtitle'>{props.items.title1}</div>
          )
      }


    </div>
  )
}
export default Comocard;