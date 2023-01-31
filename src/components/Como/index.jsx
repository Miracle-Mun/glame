import React from 'react';
import { useLocation } from 'react-router-dom';
import './como.scss';
import Comocard from '../../components/Comocard';

const comocards = [
  {
    img: 'assets/images/circle1.png',
    img1: 'assets/images/circle7.png',
    title: 'Baixe o APP Be Glam na sua biblioteca de aplicativos. '
  },
  {
    img: 'assets/images/circle2.png',
    img1: 'assets/images/circle8.png',
    title: 'Cadastre-se e comece a usar o melhor do Be Glam.. '
  },
  {
    img: 'assets/images/circle3.png',
    img1: 'assets/images/circle9.png',
    title: 'Encontre o profissional e o serviço ideal, com preço acessível e próximo da sua casa.  '
  },
  {
    img: 'assets/images/circle4.png',
    img1: 'assets/images/circle10.png',
    title: 'Agora é só agendar e aguardar o profissional.  '
  },
]
const Como = () => {
  const { pathname } = useLocation()
  return (
    <div className='como' id='como'>
      <div className='como_top'>
        <div className='comotext'>
          <div className='comoshape'><img src={pathname === '/client' ? '/assets/images/pink.png' : '/assets/images/gray.png'} className='shape' /></div>
          <div className='comotext1'>Como usar?</div>
        </div>
        <div className='comotext2'>Para usar Be Glam é muito fácil e prático,<br /> com quatro passos simples.</div>
      </div>
      <div className='como_bottom'>
        <div className='comobottomwrap'>

          {comocards.map((comocard, index) => {
            if (index < comocards.length - 1) {
              return (
                <>
                  <Comocard items={comocard} key={index} />
                  <div className='line'></div>
                </>
              )
            } else {
              return <Comocard items={comocard} key={index} />
            }
          })}
        </div>

      </div>


    </div>
  )
}
export default Como;