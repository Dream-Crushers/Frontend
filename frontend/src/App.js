import React, { Component } from 'react';



import './App.css';
// import Products from './components/Products';
import Bakery from './components/bakery/Bakery';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Bakery/>
      {/* <Products/> */}
      </div>
    );
  }
}

export default App;
