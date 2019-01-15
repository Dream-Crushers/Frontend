import React, {Component} from 'react';
import BakeryInfo from './BakeryInfo';

const API_URL = 'http://localhost:3000'
class Bakery extends Component{
    constructor(){
        super();
        this.state = {
          bakery: [],
        //   activeShow: null,
        //   modal: false,
        //   hovered: false,
        //   activeMeal: null,
        //   search: false
        }
      } 
    
      componentDidMount(){
        console.log('fetching data');
        fetch('https://apina.address.gov.sa/NationalAddress/v3.1/address/poi-free-text?language=E&format=JSON&page=1&servicestring=bakery&api_key=0ee954f2afb146408714f45ebbd41bde')
          .then( response => response.json())
          .then( data => {
            console.log('ddd',data);
            this.setState({
              bakery: data.Addresses
            })
          })
          .catch( error => {
            console.log(error)
          })
      }


    //   toggleHover(){
    //     this.setState({hovered: !this.state.hovered})
    //   }

    // deleteMeal(id) {
    //     const url = `http://localhost:3000/products/${id}`;
    //     fetch(url, {
    //         method: 'DELETE'
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //         const updatedMeals = this.state.meals.filter( meal => meal.id !== id)
    //         this.setState({
    //           meals: updatedMeals,
    //           activeMeal: null
    //         })
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       })
    //   }
    //   //!!!!!!!
    

      renderBakeryInfo(allBakeries) {
          console.log('!!!!!!!!',allBakeries);
        return allBakeries.map((bakery) => {
          return (
            <BakeryInfo key={bakery.id}
              bakery={bakery}
            //   setCurrentbakery={this.setCurrentbakery.bind(this)}
            // deletebakery={this.deletebakery.bind(this)}
              />
          )
        })
      }

    //   createNewShow(show) {

    //     const url = 'http://localhost:3000/shows'
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(show)
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log('DATA')
    //         console.log(data);
    //         const updatedShows = this.state.shows.concat([data]);
    //         console.log(updatedShows)
    //         this.setState({
    //           shows: updatedShows,
    //           activeShow: data,
    //           modal: false,
    //           search: false
    //         })
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       })
    //    }

    //    toggleSearch(){
    //     this.setState({
    //       search: !this.state.search
    //     })
    //   }



    render() {
      return (
<div>
           
       {this.renderBakeryInfo(this.state.bakery)}

 
      </div>

      );
    }
  }
  
  export default Bakery;
  