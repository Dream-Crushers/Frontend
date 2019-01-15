import React from 'react';

const BakeryInfo = (props) =>{
    return(
        <div>
            {/* <img src={props.bakery.img}></img> */}
            {props.bakery.Title}
            {props.bakery.title}

            
        </div>
    )
}

export default BakeryInfo;