import React, { Component } from 'react';
import Header from './Header';
import StarWarsContext from './StarWarsContext'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "searchItem": {
                value: "",
                touched: false
            },
            'selected': {
                value: 'characters',
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

    validateSearchString = () => {
        if (this.state.searchItem.value && this.state.selected.value) {
            console.log(this.state.selected.value)
            console.log(this.state.searchItem.value)
            console.log(this.context.characters)
        } else {
            console.log('You must enter search parameters')
        }
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
                            <option value='characters'>Characters</option>
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
                    </form>

                </div>
            </>
        )
    }
}