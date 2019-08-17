import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        results: [],
        query: ''
    }

    makeFetch() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(res => res.json())
            .then(json => this.setState({results: "shucky"}))
            .catch(error => console.log(error))
    }

    handleSearch = (string) => {
        this.setState({
            query: string
        })
        debugger
    }

    render() {
        return (
            <div>
                <GifSearch handleSearch={this.handleSearch}/>
                <GifList list={this.state.results}/>
            </div>
        )
    }

}