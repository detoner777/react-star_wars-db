import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class RandomPlanet extends Component {

 swapiService = new SwapiService;

  state = {
    planet: {}
  };

  constructor() {
    super();
    this.updatePlanet();
  }
  
   onPlanetLoaded = (planet) => {
     this.setState({planet});
   }

  updatePlanet() {
    const id = 12; //Math.floor(Math.random()*25)+2;
    this.swapiService.getPlanet(id)
    .then(this.onPlanetLoaded);
  }

  render() {

    const { planet:  {id, name, population, rotationPeriod, diameter} } = this.state;
    

    return <Spinner />
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">{population}</span>
              <span>123124</span>
            </li>
            <li className="list-group-item">
              <span className="term">{rotationPeriod}</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">{diameter}</span>
              <span>100</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
