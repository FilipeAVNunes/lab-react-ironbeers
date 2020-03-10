import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './../components/Navbar';

export class Allbeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then(response => {
      this.setState({ beers: response.data });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.state.beers.map(beer => {
          return (
            <div className="listallbeerimage">
              <img src={beer.image_url} alt={beer.name} />
              <div className="">
                <Link to={`/beer/${beer.id}`}>
                  <p>
                    <h5>{beer.name}</h5>
                  </p>
                </Link>
                <h4>{beer.tagline}</h4>
                <small>Created by: {beer.contributed_by}</small>
              </div>

              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Allbeers;
