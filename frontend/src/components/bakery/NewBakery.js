import React, {Component} from 'react';

class NewBakery extends Component{
constructor(){
    super();
    this.state= {
        bakery:'',
        title:'',
        password:'',
        address:'',
        building_number:'',
        city:'',
        email:'',
        phone:'',
        img:''
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

handleChange(event){
    const currentInput = event.target.name;
    const newValue = event.target.value;
    console.log('current input: ', currentInput);
    console.log('newValue: ', newValue);
    this.setState({
      [currentInput]: newValue
    }, function(){
      console.log(this.state);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.createNewBakery(this.state)
  }
  
    createNewBakery(bakery) {

    const url = 'http://localhost:3000/api/bakery'
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bakery)
    })
      .then(response => response.json())
      .then(data => {
        console.log('DATA')
        console.log(data);
        const updatedBakery = this.state.bakery.concat([data]);
        console.log(updatedBakery)
        this.setState({
          bakery: updatedBakery,
          activeShow: data,
          modal: false,
          search: false
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  render(){
    return(
      <div className="envelope">
        <form className="signUp-form" onSubmit={this.handleSubmit.bind(this)}>
          <label>Email:</label><input type="text" value={this.state.email} name="email" onChange={this.handleChange.bind(this)}/><br/>
          <label>password:</label><input type="password" value={this.state.password} name="password" onChange={this.handleChange.bind(this)}/><br/>
          <label>Name:</label><input type="text" value={this.state.title} name="title" onChange={this.handleChange.bind(this)}/><br/>
          <label>Address:</label><input type="text" value={this.state.address}name="address" onChange={this.handleChange.bind(this)}/><br/>
          <label>Building Number:</label><input type="text" value={this.state.building_number}name="building_number" onChange={this.handleChange.bind(this)}/><br/>
          <label>City:</label><input type="text" value={this.state.city}name="city" onChange={this.handleChange.bind(this)}/><br/>
          <label>Phone:</label><input type="text" value={this.state.phone}name="phone" onChange={this.handleChange.bind(this)}/><br/>
          <label>Image:</label><input type="url" value={this.state.img}name="img" onChange={this.handleChange.bind(this)}/><br/>
            <button>submit</button>
        </form>
      </div>
    )
  }

}

export default NewBakery;
