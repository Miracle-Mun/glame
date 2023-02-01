import React from 'react';
import './nossos2card.scss';

const Nossos2card = (props) => {
  return (
    <div className='nosso2cardswrap'>

      <img src={props.items.img1} className='nossos2img' alt='' />
      <div className='nosso2cardcontent'>{props.items.content}</div>
    </div>
  )
}
export default Nossos2card;