import React, {Component} from 'react';
// import { Button } from 'react-bootstrap';

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
        subscribe_time:'',
        bakery_id:'',
        search:false
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

      createNewSchool(school) {
        console.log('******', school)
        const url = 'http://localhost:3000/schools'
        fetch(url, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(school)
          })
          .then(response => response.json())
          .then(data => {
            console.log('DATA')
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          })
       }

  
    
    handleChange(event){
      console.log('b',this.props.bakery_id);
        const currentInput = event.target.name;
        const newValue = event.target.value;
        console.log('current input: ', currentInput);
        console.log('newValue: ', newValue);

        this.setState({
          [currentInput]: newValue,
          bakery_id:this.props.bakery_id

        }, this.totalCost)
      }

      handleSubmit(event) {
        event.preventDefault();
        // this.props.handleSubmit(this.state)
        this.createNewSchool(this.state)
        alert('Thanks for being part of the community');
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



       toggleSearch(){
        console.log('clicked');
        console.log(this.state.search)
     this.setState({
       search: !this.state.search
     })
     
   }

      


      
      
      render(){
        return(
          <div className="envelope">
            <form className="signUp-form" onSubmit={this.handleSubmit.bind(this)}>
             <input type="text" value={this.props.bakery_id} name="bakery_id"  hidden />
              <label>Email:</label><input type="text" value={this.state.email} name="email" onChange={this.handleChange.bind(this)}/><br/>
              <label>School Name:</label><input type="text" value={this.state.title} name="title" onChange={this.handleChange.bind(this)}/><br/>
              <label>City:</label><input type="text" value={this.state.city}name="city" onChange={this.handleChange.bind(this)}/> 
              {/* <div onClick={this.toggleSearch.bind(this)}><img src="https://i.imgur.com/WX7bym4.png" alt="" width="18px" height="15px"/></div>  */}
              <br/>
              <label>Address:</label><input type="text" value={this.state.address} name="address" onChange={this.handleChange.bind(this)}/>
             <input type="text" value={this.state.building_number}name="building_number" onChange={this.handleChange.bind(this)} hidden/><br/>
              <label>Phone:</label><input type="text" value={this.state.phone}name="phone" onChange={this.handleChange.bind(this)}/><br/>
              <label>No. of Students:</label><input type="text" value={this.state.NoOfStudents}name="NoOfStudents" onChange={this.handleChange.bind(this)}/><br/>

              <label>subscribe Time: </label>
              <select name="subscribe_time"
               onChange={this.handleChange.bind(this)}>
                <option value="60">Three Months </option>
                <option value="120"> 6 Months </option>
              </select> <br/>
              <label>Total:</label><input type="number" value={this.state.total} name="Total" onChange={this.handleChange.bind(this)} /><br/>
              <button>submit</button>
            </form>
            <div>
 
            </div>
            {/* {this.state.search?  <Search 
       toggleSearch={this.toggleSearch.bind(this)}
       saveMeal={this.createNewMeal.bind(this)}/>:''} */}
         </div>
        )
      }
      
    
    }






export default SchoolSubscribe;