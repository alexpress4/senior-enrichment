import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import EditCampus from './EditCampus';

export default class Main extends Component {
  render(){
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={Students} />
            <Route path="/students/:id" component={SingleStudent} />
            <Route path="/editStudent/:id" component={EditStudent} />

            <Route exact path="/campuses" component={Home} />
            <Route path="/campuses/:id" component={SingleCampus} />
            <Route path="/editCampus/:id" component={EditCampus} />

            <Route exact path="/addCampus" component={AddCampus} />
            <Route exact path="/addStudent" component={AddStudent} />
          </Switch>
        </div>
      </Router>
    )
  }
}
