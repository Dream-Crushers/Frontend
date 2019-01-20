import React from 'react';

const Tile = (props) => {
  return(
    <div className="tile-container" 
    onClick={() => {props.setCurrentMeal(props.meal)}}  >
    <br/><br/>
          <img src={props.meal.img} alt="" width="100px" height="100px"/>
          <div className="meal-name"> <p>{props.meal.name}</p></div>
          {props.isBaker ? <button className="delete-meal" onClick={() => {props.deleteMeal(props.meal.id)}}>x</button> :''}
      </div>

  )
}

export default Tile;