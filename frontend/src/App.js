import React, { Component } from 'react';
import SchoolSubscribe from './components/schools/SchoolSubscribe';


import './App.css';

import Products from './components/meals/Products';
import Bakery from './components/bakery/Bakery';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {getUser} from './components/services/authService';
import NavBar from './components/NavBar'
import NewBakery from './components/bakery/NewBakery';

import BakeryViews from './components/bakery/BakeryViews'



class App extends Component {
  constructor(){
    super();
    this.state={
      user:null,
      form:'signup'
    };
  }

  checkForUser(){
    const user = getUser();
    if(user){
    this.setState({user})
    }
  }

  onLogin = () => {
    console.log('login')

  }

  onSignup = () => {

  }

  logout = () => {

  }


  getProducts = () => {

  }

  componentDidMount(){
this.checkForUser();
  }


  render() {
    return (
      <div className="App">
      <NavBar user={this.state.user} onLogin={this.onLogin} onSignup={this.onSignup} logout={this.logout} getProducts={this.getProducts}/>
      <div className="container">
      
      {this.state.user ? <Profile/>: <NewBakery />}
      </div>
      {/* <Bakery/> */}
      <BakeryViews/>
      {/* <Products/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      </div>
    );
  }
}

export default App;