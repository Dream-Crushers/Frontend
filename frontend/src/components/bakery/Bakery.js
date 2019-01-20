
import React, { Component } from 'react';
import ProductView from '../meals/ProductView';
import SchoolSubscribe from '../schools/SchoolSubscribe';
import Subscription from '../bakery/Subscription'



class Bakery extends Component{
  constructor(){
    super();
    this.state={
      subscribe:false,
      subscription:[]
    }

  }

  componentDidMount() {

    fetch(`http://localhost:3000/subscription/onlyThisBaker/${this.props.activeBakery.id}`, {
      method: 'GET',
      headers: {
          "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('++',data);
        this.setState({
          subscription: data
        })
      })

      .catch(error => {
        console.log(error)
      })
      console.log(this.state.subscription)
  }

  toggleSubscribe(){
this.setState({
  subscribe:!this.state.subscribe
})
  }
  
  returnSubscription(subscriptions) {
    return subscriptions.map((sub) => {
        console.log('sub',sub)
      return (
          
       <div> <Subscription key={sub.id}
        subscription={sub}
        />
     </div> )
    })
  }


  changeView = (type) => {
    console.log( type)
    this.setState({
      form: type
    })
    console.log('f', this.state.form)
  };

  renderContent(){
   
  }
    render(){
      return (

        <div className="" >
              <div className="back" onClick={() => { this.props.setCurrentBakery(null); }} >
       <img src="https://66.media.tumblr.com/47d3c8b9adf5ec58faae51b5632988aa/tumblr_inline_mnnmb7HFFc1qz4rgp.png" alt="" width="50px" height="50px"/> Back to Bakeries
      </div>
      <br/>
      
{this.state.subscribe ? <SchoolSubscribe bakery_id={this.props.activeBakery.id}/> :
<div>
<div className="bake-container" >
            {this.props.activeBakery.title} 
           - {this.props.activeBakery.city} 
<div className="products-bar"></div>
<div className="bakery-info">
<img src={this.props.activeBakery.img} width="250px" height="300px"></img>
 
            <img src="https://png.pngtree.com/svg/20170206/icon_resume_address_1181229.png" width="30px"height="30px" alt=""/>
            {this.props.activeBakery.address} &nbsp; &nbsp; 
            {/* Building Number: {this.props.activeBakery.building_number} */}
            <img src="http://aiprosdesign.com/wp-content/uploads/2016/07/phone-256.png" width="30px"height="30px" alt=""/>
            {this.props.activeBakery.phone} &nbsp; &nbsp; 
            <img src="http://aux.iconspalace.com/uploads/email-icon-256-1250130517.png" width="30px"height="30px" alt=""/>
             {this.props.activeBakery.email}


            </div>
            <br/><br/>
            <img src="https://i.postimg.cc/YS3X9tMd/Screen-Shot-2019-01-20-at-6-07-31-AM.png" width="300px" height="70px" alt=""/> <br/><br/><br/>
            <ProductView bakeryId={this.props.activeBakery.id}/>
            </div>
<br></br>
{this.returnSubscription(this.state.subscription)}

  <div className="subscribe-button"> <button onClick={this.toggleSubscribe.bind(this)}>subscribe</button></div>
  </div>}

        </div>
    
    )
}}

export default Bakery;



// import React, { Component } from 'react';
// import BakeryInfo from './BakeryInfo';
// import NewBakery from './NewBakery';


// const API_URL = 'http://localhost:3000'

// class Bakery extends Component {
//   constructor() {
//     super();
//     // test
//     this.state = {
//       bakery: [],
//       hovered: false,
//       activeBakery: null
//       //   modal: false,
//       //   hovered: false,
//       //   activeMeal: null,
//       //   search: false
//     }
//   }

//   componentDidMount() {
//     console.log('fetching data');
//     fetch('https://apina.address.gov.sa/NationalAddress/v3.1/address/poi-free-text?language=E&format=JSON&page=1&servicestring=bakery&api_key=0ee954f2afb146408714f45ebbd41bde')
//       .then(response => response.json())
//       .then(data => {
//         console.log('ddd', data);
//         this.setState({
//           bakery: data.Addresses
//         })
//         this.renderBakeries();
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
//   toggleHover() {
//     this.setState({ hovered: !this.state.hovered })
//   }

  // setCurrentBakery(bakery) {
  //   console.log('setting bakery');
  //   console.log(bakery);
  //   this.setState({
  //     activeBakery: bakery
  //   })
  // }
//   renderBakeries() {
//     console.log('fetching bakeries');
//     fetch('http://localhost:3000/bakery')
//       .then(response => response.json())
//       .then(data => {
//         console.log('bakery', data);
//         this.setState({
//           bakery: this.state.bakery.concat(data)
//         })
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }



//   //   toggleHover(){
//   //     this.setState({hovered: !this.state.hovered})
//   //   }
//   // deleteMeal(id) {
//   //     const url = `http://localhost:3000/products/${id}`;
//   //     fetch(url, {
//   //         method: 'DELETE'
//   //       })
//   //       .then(response => response.json())
//   //       .then(data => {
//   //         const updatedMeals = this.state.meals.filter( meal => meal.id !== id)
//   //         this.setState({
//   //           meals: updatedMeals,
//   //           activeMeal: null
//   //         })
//   //       })
//   //       .catch(error => {
//   //         console.log(error);
//   //       })
//   //   }
//   //   //!!!!!!!

  // renderBakeryInfo(allBakeries) {
  //   console.log('!!!!!!!!', allBakeries);
  //   return allBakeries.map((bakery) => {
  //     bakery.Title
  //     return (
  //       <BakeryInfo key={bakery.id}
  //         bakery={bakery}
  //         setCurrentBakery={this.setCurrentBakery.bind(this)}

  //       // setCurrentbakery={this.setCurrentbakery.bind(this)}

  //       // deletebakery={this.deletebakery.bind(this)}
  //       />
  //     )
  //   })
  // }

//   createNewBakery(bakery) {

//     const url = 'http://localhost:3000/bakery'
//     fetch(url, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(bakery)
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('DATA')
//         console.log(data);
//         const updatedBakery = this.state.bakery.concat([data]);
//         console.log(updatedBakery)
//         this.setState({
//           bakery: updatedBakery,
//           activeShow: data,
//           modal: false,
//           search: false
//         })
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }

//   //    toggleSearch(){
//   //     this.setState({
//   //       search: !this.state.search
//   //     })
//   //   }
//   handleSubmit(bakery) {
//     // if(this.state.activeShow) {
//     //   this.updateShow(bakery)
//     // } else {
//     this.createNewBakery(bakery)

//   }

//   setCurrentBakery(bakery) {
//     console.log('setting bakery');
//     console.log(bakery);
//     this.setState({
//       activeBakery: bakery
//     })
//     // when given a show, set state 'activeShow' to that show
//   }

//   render() {
//     return (
//       <div>
//         {this.renderBakeryInfo(this.state.bakery)}
//         {/* <div onMouseOver={this.toggleHover.bind(this)} 
//         onMouseOut={this.toggleHover.bind(this)}>
//        { this.renderContent() }
//        </div> */}
//         <div>

//           <NewBakery
//             handleSubmit={this.handleSubmit.bind(this)} />
//         </div>

//       </div>
//     );
//   }
// }

// export default Bakery;

