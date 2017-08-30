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

  render () {
    const students = this.state.students;
    const campus = this.state.campus;

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
      </div>
    )

  }

}
