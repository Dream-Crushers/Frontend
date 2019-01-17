import React, {Component} from 'react';
import BakeryInfo from './BakeryInfo';
import NewBakery from './NewBakery';

const API_URL = 'http://localhost:3000'
class Bakery extends Component{
    constructor(){
        super(); 
        // test
        this.state = {
          bakery: [],
          hovered: false,
          activeShow: null
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
            this.renderBakeries();
          })
          .catch( error => {
            console.log(error)
          })
      }

      renderBakeries(){
        console.log('fetching bakeries');
        fetch('http://localhost:3000/bakery')
          .then( response => response.json())
          .then( data => {
            console.log('bakery',data);
            this.setState({
              bakery: this.state.bakery.concat(data)
            })
          })
          .catch( error => {
            console.log(error)
          })
      }

      toggleHover(){
        this.setState({hovered: !this.state.hovered})
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

              // setCurrentbakery={this.setCurrentbakery.bind(this)}

            // deletebakery={this.deletebakery.bind(this)}
              />
          )
        })
      }

      createNewBakery(bakery) {

        const url = 'http://localhost:3000/bakery'
        fetch(url, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(bakery)
          })
          .then(response => response.json())
          .then(data => {
            console.log('DATA')
            console.log(data);
            const updatedBakery = this.state.bakery.concat([data]);
            console.log(updatedBakery)
            this.setState({
              bakery: updatedBakery,
              activeShow: data,
              modal: false,
              search: false
            })
          })
          .catch(error => {
            console.log(error);
          })
       }

    //    toggleSearch(){
    //     this.setState({
    //       search: !this.state.search
    //     })
    //   }
    handleSubmit(bakery) {
      // if(this.state.activeShow) {
      //   this.updateShow(bakery)
      // } else {
        this.createNewBakery(bakery)
      
    }

    setCurrentBakery(bakery) {
      console.log('setting bakery');
      console.log(bakery);
      this.setState({
        activeShow: bakery
      })
      // when given a show, set state 'activeShow' to that show
    }

    render() {
      return (
        <div>
           {this.renderBakeryInfo(this.state.bakery)}
      {/* <div onMouseOver={this.toggleHover.bind(this)} 
        onMouseOut={this.toggleHover.bind(this)}>
       { this.renderContent() }
       </div> */}
       <div>

 <NewBakery 
handleSubmit={this.handleSubmit.bind(this)} />
      </div>

      </div>
      );
    }
  }
  
  export default Bakery;