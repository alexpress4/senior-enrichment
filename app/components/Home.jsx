import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      campuses: []
    }

  }

  componentWillMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }));
  }

  render () {


    const campuses = this.state.campuses;

    return (
      <div>
        <h3>Campus Directory</h3>
        <h5>click on a campus to see its student directory</h5>
        <div className="campuses">
          <ul>
            {
              campuses.map(campus => {
                return (
                  <li key={campus.id}>
                    <Link to={`/campuses/${campus.id}`}> { campus.name } </Link>
                      <br></br>
                    <img src={campus.image} />
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
