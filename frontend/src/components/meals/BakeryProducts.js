import React, { Component } from 'react';
import Tile from './Tile';
import Search from './Search';
import { getJwt } from "../services/authService";
import Meal from './Meal';
import Subscription from '../bakery/Subscription'
import EditSubscription from '../bakery/EditSubscription'

class BakeryProducts extends Component {
    constructor(){
        super();
        this.state = {
          meals: [],
          activeShow: null,
          modal: false,
          hovered: false,
          activeMeal: null,
          search: false,
          subscription:[]
        }
      } 
    
      componentDidMount(){
          console.log(getJwt())
        console.log('fetching data');
        const url = `http://localhost:3000/products/onlybaker`
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
              "x-auth-token": getJwt()
            }
          })
        .then(response => response.json())
          .then( data => {
              console.log('###',data)
            console.log(data);
            this.setState({
              meals: data
            })
          })
          .catch( error => {
            console.log(error)
          })
          console.log('++',this.state.meals)
          {this.renderSubscription()}

        }
        renderSubscription(){
            fetch('http://localhost:3000/subscription/onlybaker', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
              "x-auth-token": getJwt()
            }
          })
            .then(response => response.json())
            .then(data => {
              console.log('dddd',data);
              this.setState({
                subscription: data
              })
              console.log('----',this.state.subscription)
            })
      
            .catch(error => {
              console.log(error)
            })
            
            console.log('----',this.state.subscription)
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
      }

      renderTiles(allMeals) {
        return allMeals.map((meal) => {
          return (
            <Tile key={meal.id}
              meal={meal}
           setCurrentMeal={this.setCurrentMeal.bind(this)}
            deleteMeal={this.deleteMeal.bind(this)}
            isBaker={this.props.isBaker}
              />
          )
        })
      }

      returnSubscription(subscriptions) {
        return subscriptions.map((sub) => {
            console.log('sub',sub)
          return (
              
           <div> <Subscription key={sub.id}
            subscription={sub}
            toggleModal={this.toggleModal.bind(this)}
            isBaker={this.props.isBaker}
            />
            {this.state.modal ? 
                <EditSubscription 
                  // handleSubmit={this.handleSubmit.bind(this)} 
                  subscription={sub}
                  toggleModal={this.toggleModal.bind(this)}
                  updateSubscription={this.updateSubscription.bind(this)}
                  /> : ''}
         </div> )
        })
      }
      updateSubscription(sub) {
        console.log('recieved', sub)
        const url = `http://localhost:3000/subscription/onlybakerUpdateY`
        fetch(url, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": getJwt()
          },
          body: JSON.stringify(sub)
        })
        .then(response => response.json() )
        .then(data => {
            console.log('ddddd', data)
          const updatedSubscription= this.state.subscription.map(el => {
              console.log('el',el)
            return el.id === data.id ? data : el
          })
          console.log('current state: ', this.state.subscription);
          console.log('new state: ', this.updatedSubscription)
    
          this.setState({
            subscription: updatedSubscription,
            // activeShow: show,
            modal: false
          })
        })
        .catch(error => {
          console.log(error);
        })
      }

      createNewMeal(meal) {
        console.log('******', meal)
        const url = 'http://localhost:3000/products/onlybaker'
        fetch(url, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": getJwt()
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
           console.log('clicked');
           console.log(this.state.search)
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
              <div className="bakeries-header"> <img src="https://i.postimg.cc/YS3X9tMd/Screen-Shot-2019-01-20-at-6-07-31-AM.png" width="300px" height="70px" alt=""/>
      </div>
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

   <div  className="action-buttons">
   <div onClick={this.toggleSearch.bind(this)}>Add product</div> </div>
      </div>
      <br/><br/><br/>
      
      <div className="bakeries-header"> <img src="https://i.postimg.cc/vmpbNfSV/Screen-Shot-2019-01-20-at-7-43-04-AM.png" width="300px" height="70px" alt=""/>
      </div>
      <br/><br/>
      {this.returnSubscription(this.state.subscription)}

 {/* {this.state.modal ? 
          <EditSubscription 
            // handleSubmit={this.handleSubmit.bind(this)} 
            subscription={this.state.subscription}
            toggleModal={this.toggleModal.bind(this)}
            /> : ''} */}


        </div>
      );
    }
  }
  
  export default BakeryProducts;