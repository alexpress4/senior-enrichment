import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
      campusName: ''
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
    const campusId = this.props.match.params.id;

    axios.put(`api/campuses/${campusId}`, {
      name : this.state.campusName
    })
      .then(() => this.setState({
        campusName: ''
      }))
      .then(alert('Campus name successfully edited'))
      .catch(err => alert('Campus name invalid - see that the form is filled out'));
  }

  render () {
    const students = this.state.students;
    const campus = this.state.campus;

    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Edit Campus Name: </label>
              <br></br>
              <input
                type="text"
                name="campusName"
                value= {this.state.campusName}
                placeholder="Enter new campus name"
                onChange={handleChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="button" >Edit Campus Name</button>
          </div>
        </form>
      </div>
    )

  }

}
