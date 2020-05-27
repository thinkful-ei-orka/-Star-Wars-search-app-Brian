import React, { Component } from 'react'
import StarWarsContext from './StarWarsContext';

export default class Films extends Component {
   
    static contextType = StarWarsContext;
    render(){
        const filmArr = this.context.films
        const films = filmArr && filmArr.map((film, index) => {
            return (
                <li key={index}>
                    <p className="char-name"><strong>{film.title}</strong></p>
                    <p><strong>Director:</strong> {film.director}</p>
                    <p><strong>Producer:</strong> {film.producer}</p>
                    <p><strong>Release Date:</strong> {film.release_date}</p>
                    <p><strong>Opening crawl:</strong> {film.opening_crawl}</p>
                </li>
            )
        })

        return(
            <ul>
                {films}
            </ul>
        )
    }
}