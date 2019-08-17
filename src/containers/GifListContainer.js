import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList';

class GifListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gifs: []
         };
         this.handleFetch = this.handleFetch.bind(this)
    }

    render() {
        return (
            <div>
                <GifSearch handleFetch={this.handleFetch}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        );
    }

    handleFetch(query){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
    }
    componentDidMount() {
        this.handleFetch()
    }
}

export default GifListContainer;