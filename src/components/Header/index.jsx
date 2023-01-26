import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to='/'><img src={pathname === '/client' ? '/assets/images/logo1.png' : '/assets/images/logo2.png'} className='logos' alt='' /></Link>
        </div>
        {!isMobile &&
          <div className='btns'>
            <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Sobre a BeGlam</div>
            <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Como usar</div>
            <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Nossos Serviços</div>
            <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Avaliações</div>
            <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Por Aí</div>
            <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Contato</div>
          </div>
        }
      </div>
      {isMobile && <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />}
    </div>
  )
}
export default Header;