import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Students extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount () {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => this.setState({ students }));
  }

  render () {
    const students = this.state.students;

    return (
      <div>
        <h3>Student Directory</h3>
        <h5>click on a student to get more infomation or edit</h5>
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
