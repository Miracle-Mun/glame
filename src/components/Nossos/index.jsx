import React from 'react';
import './nossos.scss';
import Nossoscard from '../../components/Nossoscard';
import { useLocation } from 'react-router-dom';

const nossoscards = [
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
const Nossos = () => {
  const { pathname } = useLocation()
  return (
    <div className='nossos'>
      <div className='nossos_top'>
        <div className='nossostexts'>
          <div className='nossos_img'><img src={pathname === '/client' ? '/assets/images/vector8.png' : '/assets/images/vector10.png'} className='vector8' /></div>
          <div className='nossos_text'>Nossos Serviços</div>
        </div>
      </div>
      <div className='nossos_bottom'>
        {
          nossoscards.map((nossoscard, index) => (<Nossoscard items={nossoscard} key={index} />))
        }
      </div>
    </div>
  )
}
export default Nossos;