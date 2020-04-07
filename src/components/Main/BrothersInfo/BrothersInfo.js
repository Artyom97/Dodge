import React from "react";
import './BrothersInfo.scss';

const BrothersInfo = () => {
  return (
     <div className='BrothersInfo'>
         <div className='BrothersInfo-block'>
             <div className='BrothersInfo-block__info'>
                 <div className='BrothersInfo-block__img'>
                     <img src="#" alt="image1"/>
                 </div>
                 <div className='BrothersInfo-block__link'>
                     <a href="#">
                        <p>Link in Wikipedia</p>
                     </a>
                 </div>
             </div>
             <div className='BrothersInfo-block__info'>
                 <div className='BrothersInfo-block__img'>
                     <img src="#" alt="image2"/>
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