import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      campuses: []
    }
  }

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(students => this.setState({ campuses }));
  }



}
