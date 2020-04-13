import React from "react";
import './CardHistoriesInfoBlock.scss';

const CardHistoriesInfoBlock = (props) => {
    return (
        <div className='CardHistories-block__design'>
            <div className='CardHistories-block__img'>
                <img src={props.image} alt="imageCard1"/>
            </div>
            <div className='CardHistories-block__text'>
                <p>{ props.titleOne }</p>
                <a href={ props.hrefLink }>{ props.moreInfo }</a>
            </div>
        </div>
    )
};

export default CardHistoriesInfoBlock
