import React, { Component } from 'react';
import SchoolSubscribe from './components/schools/SchoolSubscribe';
import './App.css';
import Products from './components/meals/Products';
import Bakery from './components/bakery/Bakery';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NavBar from './components/NavBar'
import NewBakery from './components/bakery/NewBakery';
import { getUser, logout } from "./components/services/authService";

import BakeryViews from './components/bakery/BakeryViews'
import BakeryProducts from './components/meals/BakeryProducts';



class App extends Component {
  constructor(){
    super();
    this.state={
      user:null,
      form:'home'
    };
  }
  checkForUser() {
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }
  componentDidMount() {
    this.checkForUser();
  }

  changeView = (type) => {
    console.log( type)
    this.setState({
      form: type
    })
  };

  login = () => {
    const user = getUser();
    this.setState({ user });
  };

  logout = () => {
    logout();
    this.setState({ user: null });
  };

  getProducts = () => {};


  renderContent(){
    if(this.state.form ==='home')
    return <BakeryViews/>
    else if(this.state.form ==='login')
    return <SignIn onLogin={this.login}/>
    else
    return <NewBakery/>
  }

  render() {
    return (
      <div>
// //                 <NavBar
          user={this.state.user}
          changeView={this.changeView}
          logout={this.logout}
          getProducts={this.getProducts}
          signUp={this.signUp}
          logIn={this.logIn}
        />

        <div className="container">
          {this.state.user ? 



            <BakeryProducts isBaker={this.state.user}/> :  this.renderContent()}
          </div>

       {/* {this.state.user ? <BakeryViews/>:  <BakeryViews/>}
       {this.state.form === 'signup'? <NewBakery />:''}
       {this.state.form === 'login'? <SignIn/>:''} */} 
       {/* <NewBakery /> */}
 
      {/* <Bakery/> */}
      {/* <BakeryViews/> */}
      {/* <Products/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <SchoolSubscribe/> */}
        </div>
   );
 }
}
export default App;