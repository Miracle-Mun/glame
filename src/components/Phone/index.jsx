import React from 'react';
import Card from '../../components/Card';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './phone.scss';
import { useLocation } from 'react-router-dom';


const cards = [
  {
    img: 'assets/images/beauty1.png',
    title: 'A forma mais rápida e prática de agendar e receber profissionais de beleza e estética na sua casa com poucos cliques. ',
  },
  {
    img: 'assets/images/beauty2.png',
    title: 'Na Be Glam contamos com diversos profissionais: De manicure e esteticista, um portfólio completo.  ',
  },
  {
    img: 'assets/images/smartphone.png',
    title: 'E tudo isso na praticidade de solicitar via aplicativo, e não só isso, com a opção de pagar direto ao profissional ou pelo APP, você escolhe.  ',
  },
]
const Phone = () => {
  const { pathname } = useLocation()
  return (
    <div className='phonewrap'>
      <Link to='phonecontainer' spy={true} smooth={true} offset={50} duration={500}><div className='circle1'> <img src={pathname === '/client' ? '/assets/images/arrow1.png' : '/assets/images/arrow2.png'} alt='' /></div></Link>
      <div className='phonecontainer' id='phonecontainer'>
        <div className='phoneleft'>
          <div className='phoneleft_img'></div><img src='/assets/images/phone.png' className='phone' alt='' />
        </div>
        <div className='phoneright'>
          <div className='card'>
            {
              cards.map((card, index) => (<Card items={card} key={index} />))
            }
          </div>
          <div className='phonebtn'>
            <div className='phoneleft'>
              <img src='/assets/images/app.png' alt='' />
              <div className='phoneleft_text'>App Store</div>
            </div>
            <div className='phoneright1'>
              <img src='/assets/images/google.png' alt='' />
              <div className='phoneright_text'>Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Phone;