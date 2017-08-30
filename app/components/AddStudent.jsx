import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AddStudent extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      campus: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const value = event.target.value;

    this.setState({
      campusInput: value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    axios.post('/api/students', { name: this.state.studentInput })
      .then(res => res.data)

  }

  render () {

    const handleChange = this.state.handleChange;
    const handleSubmit = this.state.handleSubmit;
    const value = this.state.campusInput;

    return (
      <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Add a Student: </label>
                <br></br>
                <input
                  type="text"
                  value= {this.state.campusInput}
                  placeholder="Enter first name"
                  onChange={handleChange} />
                <br></br>
                <input
                  type="text"
                  value= {this.state.campusInput}
                  placeholder="Enter last name"
                  onChange={handleChange} />
                <br></br>
                <input
                  type="text"
                  value= {this.state.campusInput}
                  placeholder="Enter email address"
                  onChange={handleChange} />
                <br></br>
                <input
                  type="text"
                  value= {this.state.campusInput}
                  placeholder="Enter campus"
                  onChange={handleChange} />
            </div>
            <div className="form-group">
              <button type="submit" className="button" >Enroll Student</button>
            </div>
          </form>
        </div>
    )

  }

}
