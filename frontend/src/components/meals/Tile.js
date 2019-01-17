import React from 'react';

const Tile = (props) => {
  return(
    <div className="tile-container" 
    onClick={() => {props.setCurrentMeal(props.meal)}}
    >
    <div className="meal-details">
      <h2>{props.meal.name}</h2>
      {/* <h2>{props.meal.calories}</h2>
      <h2>{props.meal.fat}</h2>
      <h2>{props.meal.sodium}</h2> */}
 <img src={props.meal.img} alt="" width="100px" height="100px"/>

      <button className="delete-meal" onClick={() => {props.deleteMeal(props.meal.id)}}>x</button> 
      </div>
    </div>
  )
}

export default Tile;