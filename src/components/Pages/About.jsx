import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Nav from "../Nav";

const navLinks = [
  {
    path: "/team",
    text: "team"
  },
  {
    path: "/company",
    text: "company"
  },
  {
    path: "/story",
    text: "story"
  }
];

const About = props => (
  <div>
    <h2>About Page</h2>
    <Nav items={navLinks} currentPath={props.match.path} />
    <Switch>
      <Route
        exact
        path={`${props.match.path}/team`}
        render={() => <h3>Team</h3>}
      />
      <Route
        exact
        path={`${props.match.path}/company`}
        render={() => <h3>Company</h3>}
      />
      <Route
        exact
        path={`${props.match.path}/story`}
        render={() => <h3>Story</h3>}
      />
    </Switch>
  </div>
);

export default About;
