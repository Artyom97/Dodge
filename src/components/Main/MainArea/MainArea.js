import React from "react";
import './MainArea.scss';
import LogoGif from '../../../assets/images/dodge-logo.gif';

const MainArea = () => {
  return (
      <div className='MainArea'>
          <div className='MainArea-block'>
              <div className='MainArea-block__img'>
                  <img src={LogoGif} alt="Gif Logo"/>
              </div>
          </div>
      </div>
  )
};

export default MainArea