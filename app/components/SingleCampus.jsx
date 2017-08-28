import React, { Component } from 'react';

export default class SingleCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
      campus: {}
    }
  }

  componentDidMount () {
    const campusId = this.props.match.params.campusId;

    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        campus
      }));
  }

  render () {

    return (
      <div className='campus'>

      </div>
    )

  }

}
