import React, { Component } from 'react';
import SchoolSubscribe from './components/schools/SchoolSubscribe';


import './App.css';
// import Products from './components/Products';
// import Bakery from './components/bakery/Bakery';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Bakery/> */}
      <SchoolSubscribe/>
      {/* <Products/> */}
      </div>
    );
  }
}

export default App;
