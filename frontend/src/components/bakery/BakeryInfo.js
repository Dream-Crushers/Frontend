import React, { Component } from 'react';
import BakeryViews from './BakeryViews';

const BakeryInfo = (props) => {
    return (


        <div className="tile-container"
            onClick={() => { props.setCurrentBakery(props.bakery) }} >
            <img src={props.bakery.img} width="200px" height="200px"></img>
            {props.bakery.Title}
            {props.bakery.title}
            
        </div>
    )
}

export default BakeryInfo;