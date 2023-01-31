import React from 'react';
import './nossos2.scss';
import Nossos2card from '../../components/Nossos2card';

const nossos2cards = [
  {
    img: 'assets/images/circle5.png',
    img1: 'assets/images/circle6.png',
    title: 'Unhas',
    content: 'Pés e Mãos, Mãos e muito mais'
  },
  {
    img: 'assets/images/circle5.png',
    img1: 'assets/images/circle6.png',
    title: 'Salão de Beleza',
    content: 'Corte de cabelo, maquiagem e tonificação.'
  },
  {
    img: 'assets/images/circle5.png',
    img1: 'assets/images/circle6.png',
    title: 'Massagem',
    content: 'Massagem Relaxante, Modeladora e Estética.'
  },
  {
    img: 'assets/images/circle5.png',
    img1: 'assets/images/circle6.png',
    title: 'Estética',
    content: 'Limpeza de pele tradicional,Limpeza de pele com hidratação'
  },
  {
    img: 'assets/images/circle5.png',
    img1: 'assets/images/circle6.png',
    title: 'Depilação',
    content: 'Pernas Masc, Braços Masc e muito mais'
  },
  {
    img: 'assets/images/circle5.png',
    img1: 'assets/images/circle6.png',
    title: 'Barbearia',
    content: 'Corte tradicional ou degradê MASC, Barba e muito mais'
  },
]
const Nossos2 = () => {
  return (
    <div className='nossos2' id='nossos2'>
      <div className='nossos2_top'>
        <div className='nossos2texts'>
          <div className='nossos2_img'><img src='/assets/images/gray2.png' className='gray2' /></div>
          <div className='nossos2_text'>Nossos Serviços</div>
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