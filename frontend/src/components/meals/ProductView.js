import React, { Component } from 'react';
import Tile from './Tile';
import Search from './Search';

import Meal from './Meal';


const API_URL = 'http://localhost:3000'

class ProductView extends Component {
    constructor(){
        super();
        this.state = {
          meals: [],
          activeShow: null,
          modal: false,
          hovered: false,
          activeMeal: null,
        }
      } 
    
      componentDidMount(){
        console.log('fetching data');
        // const url = 
        fetch(`http://localhost:3000/products/baker/${this.props.bakeryId}`)
          .then( response => response.json())
          .then( data => {
            console.log(data);
            this.setState({
              meals: data
            })
          })
          .catch( error => {
            console.log(error)
          })
      }


      toggleHover(){
        this.setState({hovered: !this.state.hovered})
      }



      setCurrentMeal(meal) {
        console.log('setting meal');
        console.log(meal);
        this.setState({
          activeMeal: meal
        })
        // when given a show, set state 'activeShow' to that show
      }

      renderTiles(allMeals) {
        return allMeals.map((meal) => {
          return (
            <Tile key={meal.id}
              meal={meal}
           setCurrentMeal={this.setCurrentMeal.bind(this)}
              />
          )
        })
      }


      toggleModal(){
        this.setState({
          modal: !this.state.modal
        })
      }
      
    render() {
      return (
        <div className="products">
            <div className="meal" >
            {/* {this.renderTiles(this.state.meals)} */}
            </div>

        <div className="meals-list" 
            // onClick={this.handleClick.bind(this)}
            >
     
       {this.renderTiles(this.state.meals)}
       
       
          {this.state.activeMeal?<Meal
          setCurrentMeal={this.setCurrentMeal.bind(this)} 
          activeMeal={this.state.activeMeal}
          toggleModal={this.toggleModal.bind(this)}
          />:''}

      </div>


        </div>
      );
    }
  }
  
  export default ProductView;