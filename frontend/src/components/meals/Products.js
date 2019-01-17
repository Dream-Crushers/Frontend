import React, { Component } from 'react';
import Tile from './Tile';
import Search from './Search';

import Meal from './Meal';


const API_URL = 'http://localhost:3000'

class Products extends Component {
    constructor(){
        super();
        this.state = {
          meals: [],
          activeShow: null,
          modal: false,
          hovered: false,
          activeMeal: null,
          search: false
        }
      } 
    
      componentDidMount(){
        console.log('fetching data');
        // const url = 
        fetch(API_URL + '/products')
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

    deleteMeal(id) {
        const url = `http://localhost:3000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(data => {
            const updatedMeals = this.state.meals.filter( meal => meal.id !== id)
            this.setState({
              meals: updatedMeals,
              activeMeal: null
            })
          })
          .catch(error => {
            console.log(error);
          })
      }
      //!!!!!!!

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
            deleteMeal={this.deleteMeal.bind(this)}
              />
          )
        })
      }

      createNewMeal(meal) {
        console.log('******', meal)
        const url = 'http://localhost:3000/products'
        fetch(url, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(meal)
          })
          .then(response => response.json())
          .then(data => {
            console.log('DATA')
            console.log(data);
            const updatedProducts = this.state.meals.concat([data]);
            console.log(updatedProducts)
            this.setState({
              meals: updatedProducts,
              activeShow: data,
              modal: false,
              search: false
            })
          })
          .catch(error => {
            console.log(error);
          })
       }

       toggleSearch(){
        this.setState({
          search: !this.state.search
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
       {this.state.search?  <Search 
       toggleSearch={this.toggleSearch.bind(this)}
       saveMeal={this.createNewMeal.bind(this)}/>:''}
       
          {this.state.activeMeal?<Meal
          setCurrentMeal={this.setCurrentMeal.bind(this)} 
          activeMeal={this.state.activeMeal}
          toggleModal={this.toggleModal.bind(this)}
          />:''}

   <div onClick={this.toggleSearch.bind(this)}>+</div> 
      </div>


        </div>
      );
    }
  }
  
  export default Products;