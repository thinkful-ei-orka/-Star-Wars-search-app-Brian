import React, { Component } from 'react';
import MainPage from './MainPage';
import StarWarsContext from './StarWarsContext';
import People from './People';
import Planets from './Planets';
import Films from './Films';
import Starships from './Starships'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [],
      planets: [],
      films: [],
      starships: [],
      species: [],
      vehicles: [],
      filter: ''
    }
  }

  mySetState = (selected, data) => {
    this.setState({ [selected]: data })
  }

  render() {
    
    return (
      <StarWarsContext.Provider value={{
        validateSearchString: this.validateSearchString,
        mySetState: this.mySetState,
        people: this.state.people.results,
        planets: this.state.planets.results,
        films: this.state.films.results,
        starships: this.state.starships.results,
        species: this.state.species.results,
        vehicles: this.state.vehicles.results
      }}>
        
          <MainPage />
          <People />
          <Planets />
          <Films />
          <Starships />
      </StarWarsContext.Provider>
    );
  }
}
