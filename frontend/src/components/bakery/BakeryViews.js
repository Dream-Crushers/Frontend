import React, { Component } from 'react';
import Bakery from './Bakery';
import BakeryInfo from './BakeryInfo';
class BakeryViews extends Component {
  constructor() {
    super();
    this.state = {
      bakery: [],
      activeBakery: null,
      hovered: false
    }
  }

  componentDidMount() {
    console.log('fetching data');

    fetch('http://localhost:3000/bakery')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          bakery: data
        })
      })

      .catch(error => {
        console.log(error)
      })
  }

  toggleHover() {
    this.setState({
      hovered: !this.state.hovered
    })
  }

  renderBakeryViews(allBakeries) {  
 return allBakeries.map((bakery) => {
      return (
        <BakeryInfo key={bakery.id}
          bakery={bakery}
          setCurrentBakery={this.setCurrentBakery.bind(this)}
        />
      )
    })
  }

  handleChange(event){

    const currentInput = event.target.name;
    const newValue = event.target.value;

    this.setState({
      [currentInput]: newValue,
      bakery_id:this.props.bakery_id

    })
  }


  setCurrentBakery(bakery) {
    console.log(bakery)
    this.setState({
      activeBakery: bakery
    })
  }
  render() {
    return (
      <div>
      <div className="bakeries-header"> <img src="https://i.postimg.cc/QdKK6mFs/Screen-Shot-2019-01-20-at-5-30-33-AM.png" width="300px" height="70px" alt=""/></div>
      <br/>    
     <div className="bakery-views">
      <br/>
        {this.state.activeBakery ? < Bakery
          activeBakery={this.state.activeBakery}
          setCurrentBakery={this.setCurrentBakery.bind(this)}  /> : 
          this.renderBakeryViews(this.state.bakery)}
      
      </div></div>
    )
  }
}


export default BakeryViews;