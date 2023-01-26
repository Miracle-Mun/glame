import React from 'react';
import './somoscard.scss';
import { useLocation } from 'react-router-dom';

const Somoscard = (props) => {
  const { pathname } = useLocation()
  return (
    <div className='somoswrap'>
      <div className='somoscontaniner'>
        <img src={props.items.img} className='somosimgs' alt='' />
        <div className='somostext'>
          <div className='somostitle'>{props.items.title}</div>
          {
            pathname === '/client' ? (
              <div className='star'><img src={props.items.star} /></div>
            ) :
              <div className='star'><img src={props.items.star1} /></div>
          }

        </div>
      </div>
      <div className='somoscontent'>{props.items.content}</div>
    </div>
  )
}
export default Somoscard;