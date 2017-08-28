import React, { Component } from 'react';
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



}
