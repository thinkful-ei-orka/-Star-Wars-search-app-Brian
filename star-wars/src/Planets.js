import React, { Component } from 'react'
import StarWarsContext from './StarWarsContext';

export default class Planets extends Component {
   
    static contextType = StarWarsContext;
    render(){
        const planetArr = this.context.planets
        const planets = planetArr && planetArr.map((planet, index) => {
            return (
                <li key={index}>
                    <p className="char-name"><strong>{planet.name}</strong></p>
                    <p><strong>Rotation period:</strong> {planet.rotation_period}</p>
                    <p><strong>Orbital period:</strong> {planet.orbital_period}</p>
                    <p><strong>Diameter:</strong> {planet.diameter}</p>
                    <p><strong>Gravity:</strong> {planet.gravity}</p>
                    <p><strong>Terrain:</strong> {planet.terrain}</p>
                    <p><strong>Population:</strong> {planet.population}</p>
                </li>
            )
        })

        return(
            <ul>
                {planets}
            </ul>
        )
    }
}