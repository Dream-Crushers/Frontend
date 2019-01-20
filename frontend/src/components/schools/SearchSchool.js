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


  renderSchoolSubscribe(allSchools) {
    console.log('!!!!!!!!', allSchools);
    return allSchools.map((shcool) => {
      return (
<h1>school.Address</h1>
      )
    })
  }


render(){
    return(
<div></div>
    );
}
}

      export default SchoolSubscribe;