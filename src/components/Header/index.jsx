import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import './header.scss';

const Header = () => {
  const { pathname } = useLocation()

  return (
    <div className='headerwrap'>
      <div className='headercontainer'>
        <a href='/'><div className='logo'>
          <img src={pathname === '/client' ? '/assets/images/logo1.png' : '/assets/images/logo2.png'} className='logos' alt='' />
        </div></a>
        <div className='btns'>
          <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Sobre a BeGlam</div>
          <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Como usar</div>
          <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Nossos Serviços</div>
          <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Avaliações</div>
          <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Por Aí</div>
          <div className={pathname === '/client' ? 'btn1' : 'btn2'}>Contato</div>
        </div>
      </div>
      {/* <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
    </div>
  )
}
export default Header;