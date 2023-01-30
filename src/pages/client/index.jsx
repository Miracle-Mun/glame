import React from 'react';
import './client.scss'
import Header from '../../components/Header';
import Download from '../../components/Download';
import Phone from '../../components/Phone';
import Como from '../../components/Como';
import Agende from '../../components/Agende';
import Nossos from '../../components/Nossos';
import Precisa from '../../components/Precisa';
import Somos from '../../components/Somos';
import Glam from '../../components/Glam';
import Footer from '../../components/Footer';
import Bottom from '../../components/Bottom';
import { useLocation } from 'react-router-dom';

const Client = () => {
  const { pathname } = useLocation()
  return (
    <div className='clientwrap'>
      <Header />
      <Download />
      <Phone />
      <Como />
      <Agende />
      <Nossos />
      <Precisa />
      <Somos />
      <div className='glamtext'>
        <div className='glam'>Be Glam por aí</div>
        <div className={pathname === '/client' ? 'beglam1' : 'beglam2'}>@beglam</div>
      </div>
      <Glam />
      <div className={pathname === '/client' ? 'imgcolor' : 'imgcolor1'}>
        <Footer />
        <Bottom />
      </div>
    </div>
  )
}
export default Client;



