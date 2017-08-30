import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AddCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
      campusInput: ''
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

    axios.post('/api/campuses', { name: this.state.campusInput })
      .then(() => this.setState({campusInput: ''}))
      .then(() => alert('Campus successfully added'))
      .catch(err => alert('REQUEST FAILED: Campus name cannot be empty'));
  }

  render () {

    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;
    const value = this.state.campusInput;

    return (
      <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Add a Campus: </label>
                <br></br>
                <input
                  type="text"
                  value= {this.state.campusInput}
                  placeholder="Enter campus name"
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
