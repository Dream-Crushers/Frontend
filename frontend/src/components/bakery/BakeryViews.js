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
  //   handleSubmit(bakery) {
  //   // if(this.state.activeShow) {
  //   //   this.updateShow(bakery)
  //   // } else {
  //   this.createNewBakery(bakery)

  // }

  //   createNewBakery(bakery) {

  //   const url = 'http://localhost:3000/bakery'
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(bakery)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('DATA')
  //       console.log(data);
  //       const updatedBakery = this.state.bakery.concat([data]);
  //       console.log(updatedBakery)
  //       this.setState({
  //         bakery: updatedBakery,
  //         activeShow: data,
  //         modal: false,
  //         search: false
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }

  setCurrentBakery(bakery) {
    console.log(bakery)
    this.setState({
      activeBakery: bakery
    })
  }
  render() {
    return (
      <div class="bakery-views">
        {this.state.activeBakery ? < Bakery
          activeBakery={this.state.activeBakery} /> : this.renderBakeryViews(this.state.bakery)}
      </div>
    )
  }
}


export default BakeryViews;