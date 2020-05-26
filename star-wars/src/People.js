import React, { Component } from 'react'
//import MainPage from './MainPage'
import StarWarsContext from './StarWarsContext';
import Person from './Person'

export default class People extends Component {
   
    
    
    static contextType = StarWarsContext;
    render(){
        console.log(this.context.people)
        const persons = this.context.people.map((person, index => {
            return (
                <li key={index}>
                    <p className="char-name"><strong>{person.name}</strong></p>
                    <p><strong>Gender:</strong> {person.gender}</p>
                    <p><strong>Eye Color:</strong> {person.eye_color}</p>
                    <p><strong>hair Color:</strong> {person.hair_color}</p>
                    <p><strong>Skin Color:</strong> {person.skin_color}</p>
                    <p><strong>Height:</strong> {person.height}</p>
                    <p><strong>Mass:</strong> {person.mass}</p>
                </li>
            )
        }))
        return(
            <ul>
                {persons}
            </ul>
        )
    }
}