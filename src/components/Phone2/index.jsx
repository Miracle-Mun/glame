import React from 'react';
import Card2 from '../../components/Card2';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './phone2.scss';


const card2 = [
  {
    img: 'assets/images/phone2_1.png',
    title: 'A forma mais rápida e prática de agendar e receber profissionais de beleza e estética na sua casa com poucos cliques. ',
  },
  {
    img: 'assets/images/phone2_2.png',
    title: 'Na Be Glam contamos com diversos profissionais: De manicure e esteticista, um portfólio completo.  ',
  },
  {
    img: 'assets/images/phone2_3.png',
    title: 'Com a Be Glam a autonomia está nas suas mãos, você decide os horários, distância de atendimento e quais serviços gostaria de oferecer aos seus clientes. ',
  },
  {
    img: 'assets/images/phone2_4.png',
    title: 'E tudo isso na praticidade de solicitar via aplicativo, e não só isso, com a opção de pagar direto ao profissional ou pelo APP, você escolhe.  ',
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