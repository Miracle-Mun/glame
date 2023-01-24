import React from 'react';
import Somoscard from '../../components/Somoscard'
import './somos.scss';
import { useLocation } from 'react-router-dom';

const somoscards = [
  {
    img: 'assets/images/woman5.png',
    title: 'Jane Cooper',
    star: 'assets/images/star.png',
    star1: 'assets/images/star1.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium est at libero viverra suscipit.'
  },
  {
    img: 'assets/images/woman5.png',
    title: 'Jane Cooper',
    star: 'assets/images/star.png',
    star1: 'assets/images/star1.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium est at libero viverra suscipit.'
  },
  {
    img: 'assets/images/woman5.png',
    title: 'Jane Cooper',
    star: 'assets/images/star.png',
    star1: 'assets/images/star1.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium est at libero viverra suscipit.'
  },
]
const Somos = () => {
  const { pathname } = useLocation()
  return (
    <div className='somos'>
      <div className='somos_top'>
        <div className='somostext'>
          <div className='somosshape'><img src={pathname === '/client' ? '/assets/images/Vector7.png' : '/assets/images/Vector11.png'} className='soshape' /></div>
          <div className='sotext'>
            <div className='somostext1'>Somos 5 estrelas </div>
            <div className='somostext2'>Quem usou Be Glam, aprovou!</div>
          </div>

        </div>

      </div>
      <div className='somos_bottom'>
        {somoscards.map((somoscard, index) => (<Somoscard items={somoscard} key={index} />))}
      </div>
    </div>
  )
}
export default Somos;