import React, { Component } from 'react';
import SearchResult from './SearchResult';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      foodImg:'',
      meal:'',
      result: undefined,
      // modal: false
    }
  }
  handleChange(event) {
    this.setState({
      searchTerm: event.target.value,
      result: []
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const url = `https://trackapi.nutritionix.com/v2/search/instant?query=${this.state.searchTerm}`
    // `https://api.nutritionix.com/v1_1/search/${this.state.searchTerm}?cal_min=0&cal_max=50000&appId=a420d8d0&appKey=a0e01869f75459c7994fcdf0d50896db&results=0:5`

      fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "x-app-id":"a420d8d0",
          "x-app-key":" a0e01869f75459c7994fcdf0d50896db"
        }
        // body: JSON.stringify(show)
      })
      .then(response => response.json())
      .then(data => {
        console.log('data from api: ', data);
        console.log('!!!!!!!',data.common[0].photo.thumb)
        // nf_calories
        this.setState({
          foodImg:data.common[0].photo.thumb
        })
       this.findMeal(data.branded[0].nix_item_id)
      })

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
        // this.setState({
        //     result: data
        //   })
        // console.log('results!!',this.state.result)
        // console.log('want to access this',this.state.result)
      // this.handleData(this.state.results);

       this.handleData(data)
      })

    // this.setState({
    //     // results: parsedData
    //   })
    }

    handleData(data) {
      console.log('$$$$',data);
      // const parsedData = data.map( result => {

        this.setState({
          result:{
          name: data.item_name,
          calories:data.nf_calories,
          fat: data.nf_total_fat,
          protein: data.nf_protein,
          carb: data.nf_total_carbohydrate,
          sodium: data.nf_sodium,
          cholesterol: data.nf_cholesterol,
          vitamin_a: data.nf_vitamin_a_dv,
          vitamin_c: data.nf_vitamin_c_dv,
          calcium: data.nf_calcium_dv,
          iron: data.nf_iron_dv,
          img:this.state.foodImg
             }
        })

  
      console.log('updated',this.state.result);
  
    //   this.setState({
    //     results: parsedData
    //   })
    // }

      }

  // renderResult() {
  //     return <SearchResult info={this.state.result} img={this.state.foodImg} 
  //     saveMeal={this.props.saveMeal}
  //     />
  // }


  render() {
    return(
      <div className="modal">
        <div className="close-modal" onClick={()=>{this.props.toggleSearch()}}>x</div>
        <div className="search-container">
          <form className="search" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" onChange={this.handleChange.bind(this)}/>
            <button><img src="https://i.imgur.com/WX7bym4.png" alt="" width="18px" height="15px"/></button>
          </form>
          {this.state.result ? <SearchResult info={this.state.result} img={this.state.foodImg} 
      saveMeal={this.props.saveMeal}/> : ''}
        </div>
      </div>
    )
  }
}

export default Search;
// import React, { Component } from 'react';
// import SearchResult from './SearchResult';

// class Search extends Component {
//   constructor(){
//     super();
//     this.state = {
//       searchTerm: '',
//       results: []
//     }
//   }
//   handleChange(event) {
//     this.setState({
//       searchTerm: event.target.value,
//       results: []
//     })
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     const url = `https://api.nutritionix.com/v1_1/search/${this.state.searchTerm}?cal_min=0&cal_max=50000&appId=a420d8d0&appKey=a0e01869f75459c7994fcdf0d50896db&results=0:5`
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         console.log('data from api: ', data);
//         console.log('id',data.hits._id)
//        this.handleData(data)
//       })

//       .catch(error => {
//         console.log(error);
//       })
//   }

//   handleData(data) {
//     const parsedData = data.hits.map( result => {
//       return{
//         id: this.findMeal(result._id),
//       }
//     })

//     console.log('iddd',parsedData);
//     // this.findMeal(parsedData.id)

//   }

//   findMeal(id){
//     const url = `https://api.nutritionix.com/v1_1/item?appId=a420d8d0&appKey=a0e01869f75459c7994fcdf0d50896db&id=${id}`
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         console.log('data!!!: ', data);
//         this.setState({
//             results: this.state.results.concat(data)
//           })
//         console.log('results!!',this.state.results)
//     //    this.handleData(data)
//       })

//     // this.setState({
//     //     // results: parsedData
//     //   })
//     }
  

//   renderResults() {
//     return this.state.results.map((result, index) => {
//       return <SearchResult key={index} show={result} saveShow={this.props.saveShow}/>
//     })
//   }


//   render() {
//     return(
//       <div>
//         <div className="back" onClick={this.props.toggleSearch}>Back</div>
//         <div className="search-container">
//           <form className="search" onSubmit={this.handleSubmit.bind(this)}>
//             <input type="text" onChange={this.handleChange.bind(this)}/>
//             <button><img src="https://i.imgur.com/WX7bym4.png" alt=""/></button>
//           </form>
//           {this.renderResults()}
//         </div>
//       </div>
//     )
//   }
// }

// export default Search;