import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import OurTeam from './ourTeam';
import OurCompany from './ourCompany';

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-4">
            <ul>
              <li>
                <Link to="/about/team">Our Team</Link>
              </li>
              <li>
                <Link to="/about/company">Our Company</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <Switch>
              <Route path="/about/team" component={OurTeam}></Route>
              <Route path="/about/company" component={OurCompany}></Route>
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
