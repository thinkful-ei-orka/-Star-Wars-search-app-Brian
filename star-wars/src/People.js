import React, { Component } from 'react'
//import MainPage from './MainPage'
import StarWarsContext from './StarWarsContext';
import Person from './Person'

export default class People extends Component {
   
    
    
    static contextType = StarWarsContext;
    render(){
        console.log(this.context.people)
        const persons = this.context.people.map((people, index => {
            return (
                <li key={index}>
                    <p className="char-name"><strong>{people.name}</strong></p>
                    <p><strong>Gender:</strong> {people.gender}</p>
                    <p><strong>Eye Color:</strong> {people.eye_color}</p>
                    <p><strong>hair Color:</strong> {people.hair_color}</p>
                    <p><strong>Skin Color:</strong> {people.skin_color}</p>
                    <p><strong>Height:</strong> {people.height}</p>
                    <p><strong>Mass:</strong> {people.mass}</p>
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