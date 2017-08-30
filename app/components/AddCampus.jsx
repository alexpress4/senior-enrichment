import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      campusInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const value = event.target.value;

    this.setState({
      campusInput: value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    axios.post('/api/campuses', { name: this.state.campusInput })
      .then(res => res.data)

  }

  render ()

    const handleChange = this.state.handleChange;
    const handleSubmit = this.state.handleSubmit;
    const value = this.state.campusInput;

    return (
      <div>
        <h5>click on a campus to see its student directory</h5>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Add a Campus: </label>
                  <input
                    type="text"
                    value= {this.state.campusInput}
                    placeholder="Enter campus name"
                    onChange={handleChange} />
              </div>
              <div className="form-group">
                <button type="submit" className="button" >Create Campus</button>
              </div>
            </form>
          </div>
      </div>
    )

  }

}
