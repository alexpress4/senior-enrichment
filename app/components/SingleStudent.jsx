import React, { Component } from 'react';

export default class SingleStudent extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    const studentId = this.props.match.params.studentId;

    axios.get(`/api/campuses/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        student
      }));
  }

  render () {

    return (
      <div className='student'>

      </div>
    )

  }

}
