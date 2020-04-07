import React, {Component} from "react";
import './CardHistories.scss';
import dodge from '../../../assets/images/dodge-logo.gif';

class CardHistories extends Component {
    render () {
        return (
            <div className='CardHistories'>
                <div className='CardHistories-block'>
                    <div className='CardHistories-block__design'>
                        <div className='CardHistories-block__img'>
                            <img src={dodge} alt="imageCard1"/>
                        </div>
                        <div>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                    <div className='CardHistories-block__design'>
                        <div className='CardHistories-block__img'>
                            <img src='#' alt="imageCard2"/>
                        </div>
                        <div>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                    <div className='CardHistories-block__design'>
                        <div className='CardHistories-block__img'>
                            <img src='#' alt="imageCard3"/>
                        </div>
                        <div>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                    <div className='CardHistories-block__design'>
                        <div className='CardHistories-block__img'>
                            <img src='#' alt="imageCard4"/>
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