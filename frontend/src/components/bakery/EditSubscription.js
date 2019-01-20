import React, { Component } from 'react';

class EditSubscription extends Component {
  constructor(props){
    super();
    this.state = {
    threem_details: props.subscription.threem_details,
    sixm_details: props.subscription.sixm_details,
    threem_price: props.subscription.threem_price,
    sixm_price: props.subscription.sixm_price
    }
  }
    handleChange(event){
        const currentInput = event.target.name;
        const newValue = event.target.value;
        console.log(newValue)
        this.setState({
        [currentInput]: newValue
        })
        console.log('sss',this.state)
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.updateSubscription(this.state)
    }

render(){
  return(
    <div className="Subscription-container">
    <form className="show-form" onSubmit={this.handleSubmit.bind(this)}>
      Three Months (Semester): <input type="text" name="threem_details" value={this.state.threem_details} onChange={this.handleChange.bind(this)}/><br/>
      6 Months (School Year): <input type="text" name="sixm_details" value={this.state.sixm_details} onChange={this.handleChange.bind(this)}/><br/>
      
      3 Months Price: <input type="text" name="threem_price" value={this.state.threem_price} onChange={this.handleChange.bind(this)}/><br/>
      6 Months Price: <input type="text" name="sixm_price" value={this.state.sixm_price} onChange={this.handleChange.bind(this)}/>
      <button>Submit</button>
      </form>
      </div>
  )
}
}

export default EditSubscription;