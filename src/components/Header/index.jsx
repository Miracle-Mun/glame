import React from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import { useResize } from "../../utils/Helper";
import './header.scss';

const Header = () => {
  const { pathname } = useLocation()
  const { isMobile } = useResize()
  return (
    <div className='headerwrap'>
      <div className='headercontainer'>
        <div className='logo'>
          <a href='/'><img src={pathname === '/client' ? '/assets/images/logo1.png' : '/assets/images/logo2.png'} className='logos' alt='' /></a>
        </div>
        {!isMobile &&
          <div className='btns'>
            <Link to='download' spy={true} smooth={true} offset={50} duration={500}><div className={pathname === '/client' ? 'btn1' : 'btn2'}>Sobre a BeGlam</div></Link>
            <Link to='como' spy={true} smooth={true} offset={50} duration={500}><div className={pathname === '/client' ? 'btn1' : 'btn2'}>Como usar</div></Link>
            {
              pathname === '/client' ? (
                <Link to='nossos' spy={true} smooth={true} offset={50} duration={500}><div className={pathname === '/client' ? 'btn1' : 'btn2'}>Nossos Serviços</div></Link>)
                :
                (
                  <Link to='exclus'><div className={pathname === '/client' ? 'btn1' : 'btn2'}>Exclusividades</div></Link>
                )
            }

            <Link to='precisa' spy={true} smooth={true} offset={50} duration={500}><div className={pathname === '/client' ? 'btn1' : 'btn2'}>Avaliações</div></Link>
            <Link to='glam' spy={true} smooth={true} offset={50} duration={500}><div className={pathname === '/client' ? 'btn1' : 'btn2'}>Por Aí</div></Link>
            <Link to='footerwrap' spy={true} smooth={true} offset={50} duration={500}><div className={pathname === '/client' ? 'btn1' : 'btn2'}>Contato</div></Link>
          </div>
        }
      </div>
      {isMobile && <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />}
    </div>
  )
}
export default Header;