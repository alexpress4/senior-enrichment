import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudent extends Component {
  constructor(props){
    super(props)
    this.state = {
      student: {}
    }
  }

  componentDidMount () {
    const studentId = this.props.match.params.id;

    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        student
      }));
  }

  render () {
    const student = this.state.student;

    return (
      <div className='student'>
        <ul>
          <li>{student.fullName}</li>
          <li>{`e-mail: ${student.email}`}</li>
        </ul>
      </div>
    )

  }

}
