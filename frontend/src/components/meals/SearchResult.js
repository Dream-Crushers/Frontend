import React from 'react';

const SearchResult = (props) => {
  return (
    <div className="search-result">
      <div>
        <h2>Meal:{props.info.name}</h2>
        <h4>Calories:{props.info.calories} </h4>
       <h6>Fat:{props.info.fat}</h6>
       <h6>Protein:{props.info.protein}</h6>
       <h6>Carb:{props.info.carbohydrate}</h6>
       <h6>Sodium:{props.info.sodium}</h6>
       <h6>Cholesterol:{props.info.cholesterol}</h6>
       <h6>Vitamin A:{props.info.vitamin_a}</h6>
       <h6> Vitamin C:{props.info.vitamin_c}</h6>
       <h6>Calcium:{props.info.calcium}</h6>
       <h6> Iron:{props.info.iron}</h6>

      </div>
      <div>
        <img src={props.img} alt=""/>
        <div className="result-details">
          {/* <p>{props.show.description}</p> */}
          <button onClick={() => {props.saveMeal(props.info)}}>Add product</button>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;