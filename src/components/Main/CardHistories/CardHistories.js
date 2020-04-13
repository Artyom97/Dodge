import React , { Component } from "react";
import './CardHistories.scss';
import CardHistoriesInfo from "./CardHistoriesInfo/CardHistoriesInfo";
import charger1 from '../../../assets/images/charger1.jpg';
import charger2 from '../../../assets/images/charger2.jpg';
import challenger1 from '../../../assets/images/challenger1.jpg';
import challenger2 from '../../../assets/images/challenger2.jpg';

class CardHistories extends Component {
    constructor (props) {
        super (props);
        this.state = {
            titleOne: 'Dodge Charger',
            titleTwo: 'Dodge Challenger',
            hrefLink: '#',
            moreInfo: 'More Info'
        }
    }
    render () {
        return (
            <div className='CardHistories'>
                <div className='CardHistories-block'>
                   <CardHistoriesInfo
                       image={charger1}
                       name={this.state.name}
                       hrefLink={this.state.hrefLink}
                       moreInfo={this.state.moreInfo}
                       titleOne={this.state.titleOne}
                   />
                    <CardHistoriesInfo
                        image={charger2}
                        name={this.state.name}
                        hrefLink={this.state.hrefLink}
                        moreInfo={this.state.moreInfo}
                        titleOne={this.state.titleOne}
                    />
                    <CardHistoriesInfo
                        image={challenger1}
                        name={this.state.name}
                        hrefLink={this.state.hrefLink}
                        moreInfo={this.state.moreInfo}
                        titleOne={this.state.titleTwo}
                    />
                    <CardHistoriesInfo
                        image={challenger2}
                        name={this.state.name}
                        hrefLink={this.state.hrefLink}
                        moreInfo={this.state.moreInfo}
                        titleOne={this.state.titleTwo}
                    />
                </div>
            </div>
        );
    }
}

export default CardHistories