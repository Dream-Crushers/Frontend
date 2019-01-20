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
    return (
      <div>
        <div className="H-header"><img src="https://i.postimg.cc/bw9hvJpS/Screen-Shot-2019-01-19-at-11-23-17-PM.pnghttps://i.postimg.cc/fLx7G6xs/Screen-Shot-2019-01-19-at-11-25-10-PM.png" width="60%" height="500px" alt=""/></div>
        <div className="bot-left">
<p> We encourage school professionals, families and communities to take actions that lead to healthy eating habit, we provide an easy subscribe with a variety   of bakery <br/>
The benefits that arise from proper nutrition and physical activity not only enable better concentration and focus, but also sets kids up for a healthy future.</p>        </div>
        <br/><br/>
    <BakeryViews
    isBaker={this.state.user}/>
    </div>
    )
    else if(this.state.form ==='login')
    return <SignIn onLogin={this.login}/>
    else
    return <NewBakery/>
  }

  render() {
    return (
      <div className="app-container">
      <div className="body">
        <div className="logo"><img src="https://i.postimg.cc/cLFhFMX1/Screen-Shot-2019-01-19-at-10-31-15-PM.png" alt=""/></div>
               <div className="leave">
               <img src="https://66.media.tumblr.com/cb8bcb3b339986e9d9a325ec132bf896/tumblr_ods9zy41U51qizma6o1_500.jpg" width="200px" height="300px" alt=""/>
               </div>
                <NavBar
          user={this.state.user}
          changeView={this.changeView}
          logout={this.logout}
          getProducts={this.getProducts}
          signUp={this.signUp}
          logIn={this.logIn}
        />

<br/><br/>

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
      </div> </div>
    );
  }
}
export default App;