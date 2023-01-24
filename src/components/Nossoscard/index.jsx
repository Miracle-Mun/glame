import React from 'react';
import './nossoscard.scss';
import { useLocation } from 'react-router-dom';

const Nossoscard = (props) => {
  const { pathname } = useLocation()
  return (
    <div className='nossoswrap'>
      {
        pathname === '/client' ? (
          <img src={props.items.img} className='nossosimg' />
        ) :
          (
            <img src={props.items.img1} className='nossosimg' />
          )
      }

      <div className='title'>{props.items.title}</div>
      <div className='content'>{props.items.content}</div>
    </div>
  )
}
export default Nossoscard;