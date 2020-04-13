import React from "react";
import './BrothersInfo.scss';
import Durango1 from '../../../assets/images/durango1.jpg';
import Durango2 from '../../../assets/images/durango2.jpg';

const BrothersInfo = () => {
  return (
     <div className='BrothersInfo'>
         <div className='BrothersInfo-block'>
             <div className='BrothersInfo-block__info'>
                 <div className='BrothersInfo-block__img'>
                     <img src={Durango1} alt="image1"/>
                 </div>
                 <div className='BrothersInfo-block__link'>
                     <a href="#">
                        <p>Link in Wikipedia</p>
                     </a>
                 </div>
             </div>
             <div className='BrothersInfo-block__info'>
                 <div className='BrothersInfo-block__img'>
                     <img src={Durango2} alt="image2"/>
                 </div>
                 <div className='BrothersInfo-block__link'>
                     <a href="#">
                         <p>Link in Wikipedia</p>
                     </a>
                 </div>
             </div>
         </div>
     </div>
  )
};

export default BrothersInfo