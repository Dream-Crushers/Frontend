import React, { Component } from 'react';
import SchoolSubscribe from './components/schools/SchoolSubscribe';


import './App.css';

import Products from './components/meals/Products';
import Bakery from './components/bakery/Bakery';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Bakery/> */}
      <SchoolSubscribe/>
      {/* <Products/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      </div>
    );
  }
}

export default App;
