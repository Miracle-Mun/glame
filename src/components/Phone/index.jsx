import React from 'react';
import Card from '../../components/Card'
import './phone.scss';


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
  return (
    <div className='phonewrap'>
      <a href='#phonecontainer'><div className='circle1'> <img src='./assets/images/arrow.png' /></div></a>
      <div className='phonecontainer' id='phonecontainer'>
        <div className='phoneleft'>
          <div className='phoneleft_img'></div><img src='./assets/images/phone.png' className='phone' />
        </div>
        <div className='phoneright'>
          <div className='card'>
            {
              cards.map((card, index) => (<Card items={card} key={index} />))
            }
          </div>
          <div className='phonebtn'>
            <div className='phoneleft'>
              <img src='./assets/images/app.png' />
              <div className='phoneleft_text'>App Store</div>
            </div>
            <div className='phoneright1'>
              <img src='./assets/images/google.png' />
              <div className='phoneright_text'>Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Phone;