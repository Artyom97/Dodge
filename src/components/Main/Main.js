import React, {Component} from "react";
import MainCarousel from './MainCarousel/MainCarousel';
import CardHistories from './CardHistories/CardHistories';
import BrothersInfo from './BrothersInfo/BrothersInfo';
import MainArea from './MainArea/MainArea';
import './Main.scss';

class Main extends Component {
    render () {
        return (
            <div className='Main'>
                <div className='Main-block'>
                    <MainArea />
                    <CardHistories />
                    <MainCarousel />
                    <BrothersInfo />
                </div>
            </div>
        )
    }
}

export default Main