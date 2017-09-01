import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AddCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
      campusInput: '',
      campusImageUrl: ''
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

    axios.post('/api/campuses', {
        name: this.state.campusInput,
        image: this.state.campusImageUrl
      })
      .then(() => this.setState({
        campusInput: '',
        campusImageUrl: ''
      }))
      .then(() => alert('Campus successfully added'))
      .catch(err => alert('CREATION FAILED: Campus name cannot be empty and if URL added must be valid'));
  }

  render () {

    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;

    return (
      <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Add a Campus: </label>
                <br></br>
                <input
                  type="text"
                  name="campusInput"
                  value= {this.state.campusInput}
                  placeholder="Enter campus name"
                  onChange={handleChange} />
                <br></br>
                <input
                  type="text"
                  name="campusImageUrl"
                  value= {this.state.campusImageUrl}
                  placeholder="Optional image URL"
                  onChange={handleChange} />
            </div>
            <div className="form-group">
              <button type="submit" className="button" >Create Campus</button>
            </div>
          </form>
        </div>
    )

  }

}
