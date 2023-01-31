import React from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import SideBar from '../../components/SideBar';
import { useResize } from "../../utils/Helper";
import './header2.scss';

const Header2 = () => {
  const { isMobile } = useResize()
  return (
    <div className='header2wrap'>
      <div className='header2container'>
        <div className='header2logo'>
          <a href='/'><img src='/assets/images/logo2.png' className='header2logos' alt='' /></a>
        </div>
        {!isMobile &&
          <div className='header2btns'>
            <Link to='download2' spy={true} smooth={true} offset={50} duration={500}><div className='header2btn2'>Sobre a BeGlam</div></Link>
            <Link to='como' spy={true} smooth={true} offset={50} duration={500}><div className='header2btn2'>Como usar</div></Link>
            <Link to='agende2' spy={true} smooth={true} offset={50} duration={500}><div className='header2btn2' >Exclusividades</div></Link>
            <Link to='precisa2' spy={true} smooth={true} offset={50} duration={500}><div className='header2btn2'>Avaliações</div></Link>
            <Link to='glam' spy={true} smooth={true} offset={50} duration={500}><div className='header2btn2'>Por Aí</div></Link>
            <Link to='footerwrap' spy={true} smooth={true} offset={50} duration={500}><div className='header2btn2'>Contato</div></Link>
          </div>
        }
      </div>
      {isMobile && <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />}
    </div>
  )
}
export default Header2;