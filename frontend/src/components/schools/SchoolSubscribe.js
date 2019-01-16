import React, {Component} from 'react';


class SchoolSubscribe extends Component {
    constructor(){
      super();
      this.state = {
        title: '',
        address: '',
        building_number: '',
        city: '',
        email: '',
        phone: ''
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
      }

      
      render(){
        return(
          <div className="modal">
            <form className="show-form" onSubmit={}>
              <div className="close-modal"> </div>
              <label>Email:</label><input type="text" value={} name="name" onChange={}/><br/>
              <label>School Name:</label><input type="text" value={} name="School Name" onChange={}/><br/>
              <label>City:</label><input type="text" value={}name="City" onChange={}/><br/>
              <label>Address:</label><input type="text" value={}name="Address" onChange={}/><br/>
              <label>Building Number:</label><input type="number" value={}name="Building Number" onChange={}/><br/>
              <label>Phone:</label><input type="number" value={}name="Phone" onChange={}/><br/>
              <label>No.Of Students:</label><input type="number" value={}name="No.Of Students" onChange={}/><br/>
              <button>submit</button>
            </form>
          </div>
        )
      }
    
    }






export default SchoolSubscribe;