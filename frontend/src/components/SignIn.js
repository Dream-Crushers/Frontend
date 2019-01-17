import React, {Component} from 'react';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
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
            <form onSubmit={this.handleSubmit} className=" " onSubmit={this.handleSubmit}>
            <div className=" ">
                <label className=" " htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className=" " 
                placeholder="Enter your email" name="email" value={this.state.email} 
                onChange={this.handleChange} />
              </div>

              <div className=" ">
                <label className=" " htmlFor="password">Password</label>
                <input type="password" id="password" className=" " 
                placeholder="Enter your password" name="password" 
                value={this.state.password} onChange={this.handleChange} />
              </div>
              <button>Sign In</button>

           {/*    <div className=" ">
                  <button className="  ">Sign In</button> <Link to="/" className=" ">Create an account</Link>
              </div> */}
            </form>
          </div>
        );
    }
}

export default SignIn;

