import React from "react";
import './MainArea.scss';
import LogoGif from '../../../assets/images/dodge-logo.gif';

const MainArea = () => {
  return (
      <div className='MainArea'>
          <div className='MainArea-Logo'>
              <img src={LogoGif} alt="Gif Logo"/>
          </div>
      </div>
  )
};

export default MainArea