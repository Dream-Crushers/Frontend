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

  setCurrentBakery(bakery) {
    console.log(bakery)
    this.setState({
      activeBakery: bakery
    })
  }
  render() {
    return (
      <div>
        {this.state.activeBakery ? < Bakery
          activeBakery={this.state.activeBakery} /> : this.renderBakeryViews(this.state.bakery)}
      </div>
    )
  }
}


export default BakeryViews;