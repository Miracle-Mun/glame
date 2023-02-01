import React from 'react';
import Card2 from '../../components/Card2';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './phone2.scss';


const card2 = [
  {
    img: 'assets/images/phone2_1.png',
    title: 'A forma mais rápida, prática e segura de vender seus serviços com toda estrutura e base de clientes fixas. ',
  },
  {
    img: 'assets/images/phone2_2.png',
    title: 'Na Be Glam você pode criar a sua própria vitrine pessoal anunciando seus serviços para potenciais clientes.  ',
  },
  {
    img: 'assets/images/phone2_3.png',
    title: 'Com a Be Glam a autonomia está nas suas mãos, você decide os horários, distância de atendimento e quais serviços gostaria de oferecer aos seus clientes.  ',
  },
  {
    img: 'assets/images/phone2_4.png',
    title: 'E tudo isso na praticidade de gerenciar via aplicativo cada uma das solicitações ou serviços prestados.  ',
  },
]
const Phone2 = () => {
  return (
    <div className='phone2wrap'>
      <Link to='phone2container' spy={true} smooth={true} offset={50} duration={500}><div className='phone2circle'> <img src='/assets/images/arrow2.png' alt='' /></div></Link>
      <div className='phone2container' id='phone2container'>
        <div className='phone2right'>
          <div className='card2'>
            {
              card2.map((card, index) => (<Card2 items={card} key={index} />))
            }
          </div>
          <div className='phone2btn'>
            <div className='phone2left1'>
              <img src='/assets/images/app.png' alt='' />
              <div className='phone2left_text'>App Store</div>
            </div>
            <div className='phone2right1'>
              <img src='/assets/images/google.png' alt='' />
              <div className='phone2right_text'>Google Play</div>
            </div>
          </div>
        </div>
        <div className='phone2left'>
          <div className='phoneleft2_img'></div><img src='/assets/images/phone2.png' className='phone2' alt='' />
        </div>
      </div>
    </div>
  )
}
export default Phone2;