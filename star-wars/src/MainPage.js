import React, { Component } from 'react';
import Header from './Header';
import StarWarsContext from './StarWarsContext'
import ApiCalls from './ApiCalls'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "searchItem": {
                value: "",
                touched: false
            },
            'selected': {
                value: 'people',
                touched: false
            }
        }
    }

    static contextType = StarWarsContext;

    setSelectedState = (selected) => {
        this.setState({
            "selected": {
                value: selected,
                touched: true
            }
        })
    }

    setSearchItemState = (searchItem) => {
        this.setState({
            "searchItem": {
                value: searchItem,
                touched: true
            }
        })
    }

    searchForIt =() => {
            let searchString = `${this.state.selected.value}/?search=${this.state.searchItem.value}`
            console.log(searchString)
        ApiCalls(searchString)
            .then((data) => this.context.mySetState(this.state.selected.value, data))
            .catch((error) => console.log(error.message));
    }

    validateSearchString = () => {
        if (this.state.searchItem.value && this.state.selected.value) {
            this.searchForIt()
            //console.log(this.context.characters)
            // console.log(this.state.searchItem.value)
            // console.log(this.context.characters)
        } else {
            console.log('You must enter search parameters')
        }
    }

    clearResults = () => {

        this.setState({
            "selected": {
                value: '',
                touched: false
            }
        })

        this.setState({
            "searchItem": {
                value: '',
                touched: false
            }
        })

        this.context.mySetState('people', [])
        this.context.mySetState('planets', [])
        this.context.mySetState('films', [])
        this.context.mySetState('starships', [])
        this.context.mySetState('species', [])
        this.context.mySetState('vehicles', [])
    }
    


    render() {
        return (
            <>
                <Header></Header>

                <div className='searchBox'>
                    <form id='searchForm' onSubmit={e => {
                        e.preventDefault();
                        this.validateSearchString()
                    }}>
                        <label htmlFor='optionSelect'>Select a search option</label>
                        <select id='optionSelect'
                            onChange={e => this.setSelectedState(e.target.value)}>
                            <option value='people'>People</option>
                            <option value='planets'>Planets</option>
                            <option value='films'>Films</option>
                            <option value='starships'>Starships</option>
                            <option value='species'>Species</option>
                            <option value='vehicles'>Vehicles</option>
                        </select>
                        <label htmlFor='searchBox'>Enter Search String</label>
                        <input type='text' id='searchBox' className='searchBox'
                            onChange={e => this.setSearchItemState(e.target.value)}
                            value={this.state.searchItem.value}></input>
                        <button className='searchButton'>Search</button>
                        <button className='clearResults' 
                        onClick={() => this.clearResults()}>Clear Results</button>
                    </form>
                </div>
            </>
        )
    }
}