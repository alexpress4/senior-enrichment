import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export default class Main extends Component {
  render(){
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path="/students" component={Students}/>
            <Route path="/students/:id" component={SingleStudent}/>
            <Route exact path="/campuses" component={Home}/>
            <Route path="/campuses/:id" component={SingleCampus}/>
            <Route component={Home}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
