import React, {Component} from 'react';



class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            // hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(this.state);
    }

    render() {
        return (
        <div className=" ">
            <form onSubmit={this.handleSubmit} className=" ">
              <div className=" ">
                <label className=" " htmlFor="name">Full Name</label>
                <input type="text" id="name" className=" " 
                placeholder="Enter your full name" name="name" 
                value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className=" ">
                <label className=" " htmlFor="password">Password</label>
                <input type="password" id="password" className=" " 
                placeholder="Enter your password" name="password" 
                value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className=" ">
                <label className=" " htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className=" " 
                placeholder="Enter your email" name="email" 
                value={this.state.email} onChange={this.handleChange} />
              </div>
                <button>Submit</button>
            </form>
          </div>
        );
    }
}

export default SignUp;

