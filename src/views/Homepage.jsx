import React, { Component } from 'react';
import { Link, Switch, BrowserRouter } from 'react-router-dom';

export class Homepage extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Link to={`/beer`}>
              <img src="/images/beers.png" alt="beers" />
            </Link>
          </Switch>
        </BrowserRouter>
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <BrowserRouter>
          <Switch>
            <Link to={`/randombeer`}>
              <img src="/images/random-beer.png" alt="beers" />
            </Link>
          </Switch>
        </BrowserRouter>
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <BrowserRouter>
          <Switch>
            <Link to={`/newbeer`}>
              <img src="/images/new-beer.png" alt="beers" />
            </Link>
          </Switch>
        </BrowserRouter>
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    );
  }
}

export default Homepage;
