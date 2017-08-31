import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudent extends Component {
  constructor(props){
    super(props)
    this.state = {
      student: {},
      campuses: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    const studentId = this.props.match.params.id;

    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        student
      }));

    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }));

  }

  handleSubmit(event){
    const studentId = this.props.match.params.id;

    axios.delete(`api/students/${studentId}`)
      .then(alert('Student unenrolled; redirecting to students page'))
      .catch(err => alert(err));
  }


  render () {
    const student = this.state.student;
    const campusAry = this.state.campuses.filter(campus => {
      return Number(student.campusId) === Number(campus.id);
    });
    const campus = Object(campusAry[0]);

    const studentId = this.props.match.params.id;

    const handleSubmit = this.handleSubmit;

    return (
      <div className='student'>
        <br></br>
        <h3>{student.fullName}</h3>
          <ul>
            <li>{`e-mail: ${student.email}`}</li>
            <li><Link to={`/campuses/${campus.id}`}> {`Campus: ${campus.name}`}  </Link></li>
          </ul>
          <Link to={`/editStudent/${student.id}`}> {`Edit ${student.fullName}`}  </Link>
          <h5>----------------------</h5>
          <form onSubmit={handleSubmit} action="http://localhost:1337/#/students">
            <button type="submit" className="button" >Delete Student</button>
          </form>
      </div>
    )

  }

}
