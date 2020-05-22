import React, { Component } from 'react';
import MainPage from './MainPage';
import StarWarsContext from './StarWarsContext';
import ApiCalls from './ApiCalls'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      planets: [],
      films: [],
      starships: [],
      species: [],
      vehicles: [],
      filter: ''
    }
  }
  validateSearchString = (optionSelected, searchItem) => {
    console.log('ran')
    // console.log($("#searchForm input[type='radio']:checked").val())
  }

  componentDidMount() {

    ApiCalls('people')
      .then((data) => this.setState({ characters: data }))
      .catch((error) => console.log(error.message));

    ApiCalls('planets')
      .then((data) => this.setState({ planets: data }))
      .catch((error) => console.log(error.message));

    ApiCalls('films')
      .then((data) => this.setState({ films: data }))
      .catch((error) => console.log(error.message));

    ApiCalls('starships')
      .then((data) => this.setState({ starships: data }))
      .catch((error) => console.log(error.message));

    ApiCalls('vehicles')
      .then((data) => this.setState({ vehicles: data }))
      .catch((error) => console.log(error.message));

    ApiCalls('species')
      .then((data) => this.setState({ species: data }))
      .catch((error) => console.log(error.message));
    this.setState({ filter: '' })

  }
  
  render() {
    // console.log(this.state.species.results)
    return (
      <StarWarsContext.Provider value={{
        validateSearchString: this.validateSearchString,
        characters: this.state.characters.results,
        planets: this.state.planets.results,
        films: this.state.films.results,
        starships: this.state.starships.results,
        species: this.state.species.results,
        vehicles: this.state.vehicles.results
      }}>
        
          <MainPage />
          
      </StarWarsContext.Provider>
    );
  }
}
