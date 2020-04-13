import React , { Component } from 'react';
import { Carousel } from 'antd';
import './CarouselInfo.scss';

class OnChange extends Component {
    constructor (props) {
        super (props);
    }
 render () {
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    return (
           <Carousel afterChange={onChange}>
               <div>
                   <h3>1</h3>
               </div>
               <div>
                   <h3>2</h3>
               </div>
               <div>
                   <h3>3</h3>
               </div>
           </Carousel>
         )
    }
}

export default OnChange
