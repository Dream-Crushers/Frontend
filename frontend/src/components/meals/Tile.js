import React from 'react';

const Tile = (props) => {
  return(
    <div className="tile" 
    // onClick={() => {props.setCurrentMeal(props.meal)}}
    >
      <h2>{props.meal.name}</h2>
      <button className="delete" onClick={() => {props.deleteMeal(props.meal.id)}}>x</button> 
    </div>
  )
}

export default Tile;