import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AddStudent extends Component {
  constructor(props){
    super(props)
    this.state = {
      campuses: [],
      firstName: '',
      lastName: '',
      email: '',
      campusId: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const value = event.target.value;

    console.log(event.target.name)
    console.log(event.target.value)

    this.setState({
      [event.target.name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    axios.post('/api/students', {
        firstName: this.state.firstName,
        lastName: this.state.firstName,
        email: this.state.email,
        campusId: this.state.campusId
       })
      .then(() => this.setState({
        firstName: '',
        lastName: '',
        email: ''
      }))
      .then(() => alert('Student successfully enrolled'))
      .catch(err => alert('Incorrect information: check that this student is not already enrolled and all fields are filled out'));

  }

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }));
  }

  render () {

    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;

    const campuses = this.state.campuses;

    console.log(this.state)

    return (
      <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Add a Student: </label>
                <br></br>
                <input
                  type="text"
                  name="firstName"
                  value= {this.state.firstName}
                  placeholder="Enter first name"
                  onChange={handleChange} />
                <br></br>
                <input
                  type="text"
                  name="lastName"
                  value= {this.state.lastName}
                  placeholder="Enter last name"
                  onChange={handleChange} />
                <br></br>
                <input
                  type="text"
                  name="email"
                  value= {this.state.email}
                  placeholder="Enter email address"
                  onChange={handleChange} />
                <br></br>
                <select onChange={(e) => this.setState({campusId : Number(e.target.value)})}>
                  <option>~select a campus~</option>
                  {
                    campuses.map(campus => {
                      return (
                        <option key={campus.id}
                                name="campusId"
                                value={campus.id}
                                > {campus.name} </option>
                      )
                    })
                  }
                </select>
            </div>
            <div className="form-group">
              <button type="submit" className="button" >Enroll Student</button>
            </div>
          </form>
        </div>
    )

  }

}
