import React, {Component} from "react";
import './CardHistories.scss';
import charger1 from '../../../assets/images/charger1.jpg';
import charger2 from '../../../assets/images/charger2.jpg';
import challenger1 from '../../../assets/images/challenger1.jpg';
import challenger2 from '../../../assets/images/challenger2.jpg';

class CardHistories extends Component {
    render () {
        return (
            <div className='CardHistories'>
                <div className='CardHistories-block'>
                    <div className='CardHistories-block__design'>
                        <div className='CardHistories-block__img'>
                            <img src={charger1} alt="imageCard1"/>
                        </div>
                        <div>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                    <div className='CardHistories-block__design'>
                        <div className='CardHistories-block__img'>
                            <img src={charger2} alt="imageCard2"/>
                        </div>
                        <div>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                    <div className='CardHistories-block__design'>
                        <div className='CardHistories-block__img'>
                            <img src={challenger1} alt="imageCard3"/>
                        </div>
                        <div>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                    <div className='CardHistories-block__design'>
                        <div className='CardHistories-block__img'>
                            <img src={challenger2} alt="imageCard4"/>
                        </div>
                        <div>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardHistories