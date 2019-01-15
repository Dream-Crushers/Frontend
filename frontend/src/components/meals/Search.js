import React, { Component } from 'react';
import SearchResult from './SearchResult';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      results: []
    }
  }
  handleChange(event) {
    this.setState({
      searchTerm: event.target.value,
      results: []
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const url = `https://api.nutritionix.com/v1_1/search/${this.state.searchTerm}?cal_min=0&cal_max=50000&appId=a420d8d0&appKey=a0e01869f75459c7994fcdf0d50896db&results=0:5`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('data from api: ', data);
        console.log('id',data.hits._id)
       this.handleData(data)
      })
    //   .then(data => {
    //     console.log('data from api: ', data);
    //     console.log('id',data.hits._id)
    //     // this.setState({
    //     //     results:{name: hits._id,
    //     //     name: data.hex.value,
    //     //     calories: data.rgb.value
    //     // }})
    //     this.props.saveColor(this.state.results)
    //     console.log('result',this.state.results)
    //   })
      .catch(error => {
        console.log(error);
      })
  }

  handleData(data) {
    const parsedData = data.hits.map( result => {
      return{
        id: this.findMeal(result._id),
      }
    })

    console.log('iddd',parsedData);
    // this.findMeal(parsedData.id)

  }

  findMeal(id){
    const url = `https://api.nutritionix.com/v1_1/item?appId=a420d8d0&appKey=a0e01869f75459c7994fcdf0d50896db&id=${id}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('data!!!: ', data);
        this.setState({
            results: this.state.results.concat(data)
          })
        console.log('results!!',this.state.results)
    //    this.handleData(data)
      })

    // this.setState({
    //     // results: parsedData
    //   })
    }
  

  renderResults() {
    return this.state.results.map((result, index) => {
      return <SearchResult key={index} show={result} saveShow={this.props.saveShow}/>
    })
  }


  render() {
    return(
      <div>
        <div className="back" onClick={this.props.toggleSearch}>Back</div>
        <div className="search-container">
          <form className="search" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" onChange={this.handleChange.bind(this)}/>
            <button><img src="https://i.imgur.com/WX7bym4.png" alt=""/></button>
          </form>
          {this.renderResults()}
        </div>
      </div>
    )
  }
}

export default Search;