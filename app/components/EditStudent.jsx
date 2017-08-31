import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditStudent extends Component {
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

    this.setState({
      [event.target.name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    const studentId = this.props.match.params.id;

    axios.put(`/api/students/${studentId}`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        campusId: this.state.campusId
       })
      .then(() => this.setState({
        firstName: '',
        lastName: '',
        email: ''
      }))
      .then(() => alert('Student successfully edited'))
      .catch(err => alert('Incorrect information: check that all fields are filled out and the student email is not already in use'));

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

    return (
      <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Edit a Student: </label>
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
              <button type="submit" className="button" >Edit Student</button>
            </div>
          </form>
        </div>
    )

  }

}
