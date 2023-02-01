import React from 'react';
import './agende2.scss';


const Agende2 = () => {
  return (
    <div className='agende2' id='agende2'>
      <div className='agendewrap2'>
        <img src='/assets/images/agende1.png' className='agendeimg1' />
        <img src='/assets/images/agende3.png' className='agendeimg3' />
        <img src='/assets/images/agende2.png' className='agendeimg2' />
        <img src='/assets/images/agende4.png' className='agendeimg4' />
        <div className='agende2text'>
          <div className='agende2text_1'>Ainda não tem <br />equipamento próprio? </div>
          <div className='agende2text_2'>Aproveite a linha de crédito Be Glam, <br /><span className='rs500'>até R$5.000.</span></div>
          <div className='agende2textbtn'>Solicitar crédito</div>
        </div>
      </div>
    </div>
  )
}
export default Agende2;