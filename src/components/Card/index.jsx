import React from 'react';
import './card.scss';

const Card = ({ items }) => {
  return (
    <div className='cardcontainer'>
      <img src={items.img} />
      <div className='title'>{items.title}</div>
    </div>
  )
}
export default Card;