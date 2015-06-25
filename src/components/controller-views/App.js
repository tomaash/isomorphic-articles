import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavItemLink} from 'react-router-bootstrap';

import {RouteHandler} from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div className="container app">
        <Navbar brand='FB Login Test'>
          <Nav>
            <NavItemLink to='login'>Login</NavItemLink>
            <NavItemLink to='articles'>Articles</NavItemLink>
          </Nav>
        </Navbar>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}

