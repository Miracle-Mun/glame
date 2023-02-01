import React from 'react';
import './profession.scss'
import Header2 from '../../components/Header2';
import Download2 from '../../components/Download2';
import Phone2 from '../../components/Phone2';
import Como from '../../components/Como';
import Agende2 from '../../components/Agende2';
import Nossos2 from '../../components/Nossos2';
import Precisa2 from '../../components/Precisa2';
import Somos from '../../components/Somos';
import Glam from '../../components/Glam';
import Footer from '../../components/Footer';
import Bottom from '../../components/Bottom';
import { useLocation } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

const Profession = () => {
  const { pathname } = useLocation()
  return (
    <div className='professionwrap'>
      <Header2 />
      <Download2 />
      <Phone2 />
      <Como />
      <Agende2 />
      <Nossos2 />
      <Precisa2 />
      <Somos />
      <div className='glamtext'>
        <div className='glam'>Be Glam por aí</div>
        <div className={pathname === '/client' ? 'beglam1' : 'beglam2'}>@beglam</div>
      </div>
      <Glam />
      <div className={pathname === '/client' ? 'imgcolor' : 'imgcolor1'}>
        <Footer />
        <Bottom />
        <ScrollToTop smooth />
      </div>
    </div>
  )
}
export default Profession;