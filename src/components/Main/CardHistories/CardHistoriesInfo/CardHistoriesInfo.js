import React , { Fragment } from "react";
import CardHistoriesInfoBlock from "./CardHistoriesInfoBlock/CardHistoriesInfoBlock";

const CardHistoriesInfo = (props) => {
    return (
        <Fragment>
            <CardHistoriesInfoBlock
                image={props.image}
                name={props.name}
                hrefLink={props.hrefLink}
                moreInfo={props.moreInfo}
                titleOne={props.titleOne}
            />
        </Fragment>
    )
};

export default CardHistoriesInfo