import React, { Component } from 'react'
import StarWarsContext from './StarWarsContext';

export default class Starships extends Component {
   
    static contextType = StarWarsContext;
    render(){
        const StarshipArr = this.context.startships
        //console.log(this.context.starships)
        const starships = StarshipArr && StarshipArr.map((starship, index) => {
            return (
                <li key={index}>
                    <p className="char-name"><strong>{starship.name}</strong></p>
                    <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
                    <p><strong>Cost:</strong> {starship.cost}</p>
                    <p><strong>Hyperdrive rating:</strong> {starship.hyperdrive_rating}</p>
                    <p><strong>Starship class:</strong> {starship.startship_class}</p>
                </li>
            )
        })
        
        return(
            <ul>
                {starships}
            </ul>
        )
    }
}