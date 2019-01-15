import React, { Component } from 'react';
import Tile from './Tile';
import Search from './Search';

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

    //   deleteMeal(meal){
    //     const url = API_URL + `/products/${meal.id}`;
    //     fetch(url, { method: 'DELETE' })
    //       .then(response => response.json())
    //       .then(data => {
    //           console.log('meal@@', meal)
    //         const updatedMeals = this.state.meals.filter( el => el.id !== meal.id );
    //         this.setState({meals: updatedMeals});
    //       })
    //       .catch(console.log)
    //   }

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
    

      renderTiles(allMeals) {
        return allMeals.map((meal) => {
          return (
            <Tile key={meal.id}
              meal={meal}
            //   setCurrentMeal={this.setCurrentMeal.bind(this)}
            deleteMeal={this.deleteMeal.bind(this)}
              />
          )
        })
      }

      createNewShow(show) {

        const url = 'http://localhost:3000/shows'
        fetch(url, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(show)
          })
          .then(response => response.json())
          .then(data => {
            console.log('DATA')
            console.log(data);
            const updatedShows = this.state.shows.concat([data]);
            console.log(updatedShows)
            this.setState({
              shows: updatedShows,
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



    render() {
      return (
        <div className="products">
            <div className="meal" >
            {/* {this.renderTiles(this.state.meals)} */}
            </div>

        <div className="color" 
            onMouseOver={this.toggleHover.bind(this)} 
            onMouseOut={this.toggleHover.bind(this)}
            // onClick={this.handleClick.bind(this)}
            >
           
       {this.renderTiles(this.state.meals)}
       <Search toggleSearch={this.toggleSearch.bind(this)} saveShow={this.createNewShow.bind(this)}/>
 
      </div>


        </div>
      );
    }
  }
  
  export default Products;
  