import React from 'react';
import './card2.scss';

const Card2 = ({ items }) => {
  return (
    <div className='card2container'>
      <img src={items.img} />
      <div className='card2title'>{items.title}</div>
    </div>
  )
}
export default Card2;