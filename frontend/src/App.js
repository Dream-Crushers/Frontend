import React, { Component } from 'react';
import SchoolSubscribe from './components/schools/SchoolSubscribe';


import './App.css';

import Products from './components/meals/Products';
import Bakery from './components/bakery/Bakery';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import BakeryViews from './components/bakery/BakeryViews'


class App extends Component {
  constructor(){
    super();
    this.state ={
      
    }
  }
  toggleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }
  render() {
    return (
      <div className="App">
      <BakeryViews/>
      {/* <SchoolSubscribe/>
      <Products/>
      <SignUp/>
      <SignIn/> */}
      </div>
    );
  }
}

export default App;