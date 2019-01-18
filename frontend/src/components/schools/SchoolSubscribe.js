import React, {Component} from 'react';


class SchoolSubscribe extends Component {
    constructor(){
      super();
      this.state = {
        school: [],
        title: '',
        address: '',
        building_number: '',
        city: '',
        email: '',
        phone: '',
        NoOfStudents: 0,
        total: 0,
        subscribe_time:''
      }
      }
 
      componentDidMount(){
        console.log("fetching")
        const url = 'https://apina.address.gov.sa/NationalAddress/v3.1/address/poi-free-text?language=E&format=JSON&page=1&servicestring=school&api_key=0ee954f2afb146408714f45ebbd41bde';
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({
            school: [data.Addresses]
          })
        })
        .catch(error =>{
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
        }, this.totalCost)
      }

      handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state)
      }

      totalCost(){
        const students = this.state.NoOfStudents;
        console.log('STUDENTS', students)
        const  subscribtion = this.state.subscribe_time;
        console.log('SUB', subscribtion);
        const tot = parseInt(students*subscribtion);
        console.log('TOTAL', tot);
        this.setState({
          total:tot
        })

      }
        alertSubscribers(e){
          alert('Thanks for being part of the community');
          e.preventDefault();
       }
      


      
      
      render(){
        return(
          <div className="school">
            <form className="show-form" onSubmit={this.handleSubmit.bind(this)}>
              <div className="close-modal"> </div>
              <label>Email:</label><input type="text" value={this.state.email} name="email" onChange={this.handleChange.bind(this)}/><br/>
              <label>School Name:</label><input type="text" value={this.state.title} name="title" onChange={this.handleChange.bind(this)}/><br/>
              <label>City:</label><input type="text" value={this.state.city}name="city" onChange={this.handleChange.bind(this)}/><br/>
              <label>Address:</label><input type="text" value={this.state.address} name="address" onChange={this.handleChange.bind(this)}/><br/>
              <label>Building Number:</label><input type="text" value={this.state.building_number}name="building_number" onChange={this.handleChange.bind(this)}/><br/>
              <label>Phone:</label><input type="text" value={this.state.phone}name="phone" onChange={this.handleChange.bind(this)}/><br/>

              <label>No.Of Students::</label><input type="text" value={this.state.NoOfStudents}name="NoOfStudents" onChange={this.handleChange.bind(this)}/><br/>

              <label>subscribe Time: </label>
              <select name="subscribe_time"
               onChange={this.handleChange.bind(this)}>
                <option value="20">One Month</option>
                <option value="60">Three Months </option>
                <option value="120"> 6 Months </option>
              </select> <br/>
              <label>Total:</label><input type="number" value={this.state.total} name="Total" onChange={this.handleChange.bind(this)} /><br/>

            </form>
            <div>
            <form onSubmit={this.alertSubscribers}>
            <button>submit</button>
            </form>
            </div>
         </div>
        )
      }
    
    }






export default SchoolSubscribe;