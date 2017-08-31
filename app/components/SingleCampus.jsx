import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
      campus: {},
      students: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    const campusId = this.props.match.params.id;

    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        campus
      }));

    axios.get(`/api/students`)
      .then(res => res.data)
      .then(students => students.filter(student => {
        return Number(student.campusId) === Number(campusId)
      }))
      .then(filteredStudents => this.setState({
        students: filteredStudents
      }))
  }

  handleSubmit(event){
    const campusId = this.props.match.params.id;

    axios.delete(`api/campuses/${campusId}`)
      .then(alert('Campus demolished and associated students unenrolled; redirecting to home page'))
      .catch(err => alert(err));
  }

  render () {
    const students = this.state.students;
    const campus = this.state.campus;

    const handleSubmit = this.handleSubmit;

    return (
      <div>
        <h3>{ campus.name }</h3>
        <h5>students currently enrolled at our { campus.name } campus:</h5>
        <div className="students">
          <ul>
            {
              students.map(student => {
                return (
                    <li key={student.id}>
                      <Link to={`/students/${student.id}`}> {`${student.lastName}, ${student.firstName}`}  </Link>
                      <br></br>
                      {`E-mail: ${student.email}`}
                    </li>
                )
              })
            }
          </ul>
        </div>
        <form onSubmit={handleSubmit} action="http://localhost:1337/#/">
          <button type="submit" className="button" >Delete Campus</button>
        </form>
      </div>
    )

  }

}
