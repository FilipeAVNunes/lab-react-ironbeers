import React from 'react';
import './style.css';

const Beer = props => {
  return (
      <figure>
        <img src={props.image_url} alt={props.name} />
      </figure>
      <header>
        <div>
          <strong>{props.name}</strong>
          <p>{props.tagline}</p>
          <p>{props.attenuation_level}</p>
          <p>{props.first_brewed}</p>
          <p>{props.description}</p>
          <p>{props.contributed_by}</p>
        </div>
      </header>
  );
};

export default Beer;
