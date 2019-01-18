// import React, { Component } from 'react';

// class Meal extends Component {
//   constructor(){
//     super();
//     this.state = {
//     activity:''
//     }
//   }

//   getCalories(){
//     const calory=this.props.activeMeal.calories;
//     const football = Math.floor(calory/8);
//     const basketball = Math.floor(calory/7);
//     const running = Math.floor(calory/6);
//     const aerobics = Math.floor(calory/5);
   

//     return(
//     <div>
//      <h4>Football {football} minutes </h4>
//     <h4>Basketball {basketball} minutes</h4>
//     <h4>Running {running} minutes</h4>
//     <h4>Aerobics {aerobics} minutes</h4>
//  </div>
//     )

//   }

//   render(){
//     return(
//     <div>
//       <div
//         className="back"
//         onClick={() => {this.props.setCurrentMeal(null);
//         }}
//       >
//         back
//       </div>
//       <div className="container">
//         <div className="Meal">
//           <div>

//             {/* // <h2>{this.props.activeMeal.name}</h2>
//             // <h2>{this.props.activeMeal.calories}</h2>
//             // <h2>{this.props.activeMeal.fat}</h2>
//             // <h2>{this.props.activeMeal.sodium}</h2> */}
//           </div>
//           <div>
//             <img src={this.props.activeMeal.img} alt="" />
//             <h2>Meal:{this.props.activeMeal.name}</h2>
//             <h4>Calories:{this.props.activeMeal.calories} </h4>
//             <h6>Fat:{this.props.activeMeal.fat}</h6>
//             <h6>Protein:{this.props.activeMeal.protein}</h6>
//             <h6>Carb:{this.props.activeMeal.carbohydrate}</h6>
//             <h6>Sodium:{this.props.activeMeal.sodium}</h6>
//             <h6>Cholesterol:{this.props.activeMeal.cholesterol}</h6>
//             <h6>Vitamin A:{this.props.activeMeal.vitamin_a}</h6>
//             <h6> Vitamin C:{this.props.activeMeal.vitamin_c}</h6>
//             <h6>Calcium:{this.props.activeMeal.calcium}</h6>
//             <h6> Iron:{this.props.activeMeal.iron}</h6>
//           </div>
//           <div>

//         <h3>Activity</h3>
//         {this.getCalories()}
//           </div>
//         </div>
//       </div>
//     </div>
//   )}
// };

// export default Meal;