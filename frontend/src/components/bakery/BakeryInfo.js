import React from 'react';

const BakeryInfo = (props) => {
    return (


        <div className="bakery-view"
            onClick={() => { props.setCurrentBakery(props.bakery) }} >
            <img src={props.bakery.img} width="200px" height="200px"></img>
          <div className="bakery-name">  {props.bakery.title}</div> 
          <div className="bakery-city">  {props.bakery.city}</div>
            
        </div>
    )
}

export default BakeryInfo;