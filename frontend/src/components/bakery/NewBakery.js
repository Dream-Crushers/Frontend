import React, {Component} from 'react';

class NewBakery extends Component{
constructor(){
    super();
    this.state= {
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
    this.props.handleSubmit(this.state)
    // this.props.createNew(this.state)
  }
  
  render(){
    return(
      <div className=".">
        <form className="bakery-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="." 
        //   onClick={()=>{this.props.toggleModal()}}
          >x</div>
                   {/* <select name="cars">
  <option value={this.props.bakery.Title}>
  {this.props.bakery.Title}</option>
  </select><br/> */}
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
