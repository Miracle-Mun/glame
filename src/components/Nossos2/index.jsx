import React from 'react';
import './nossos2.scss';
import Nossos2card from '../../components/Nossos2card';

const nossos2cards = [
  {

    img1: 'assets/images/circle6.png',
    content: 'Treinamentos e Workshops exclusivos.'
  },
  {

    img1: 'assets/images/circle6.png',
    content: 'Receba em até 1h30 o valor do serviço. '
  },
  {

    img1: 'assets/images/circle6.png',
    content: 'Desconto em Marketplaces parceiros de até 20%.'
  },
  {

    img1: 'assets/images/circle6.png',
    content: 'Linha de crédito exclusiva de até R$ 5.000.00.'
  },
  {

    img1: 'assets/images/circle6.png',
    content: 'Gestão facilitada de agenda e clientes.'
  },
  {

    img1: 'assets/images/circle6.png',
    content: 'Gestão facilitada de agenda e clientes.'
  },
]
const Nossos2 = () => {
  return (
    <div className='nossos2' id='nossos2'>
      <div className='nossos2_top'>
        <div className='nossos2texts'>
          <div className='nossos2_img'><img src='/assets/images/gray2.png' className='gray2' /></div>
          <div className='nossos2_text'>Exclusividades Be Glam</div>
        </div>
      </div>
      <div className='nossos2_bottom'>
        {
          nossos2cards.map((nossoscard, index) => (<Nossos2card items={nossoscard} key={index} />))
        }
      </div>
    </div>
  )
}
export default Nossos2;