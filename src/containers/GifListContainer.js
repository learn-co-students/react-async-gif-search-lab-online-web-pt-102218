import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


class GifListContainer extends Component {
  state = {
    gifs: []
    }

    handleSearch = (query) => {
      const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`

      fetch(url)
      .then(res => res.json())
      .then(data => {
        const image = data.data.map(img => ({url: img.images.original.url}))
        this.setState({
          gifs: image
        })
        
      })

      
    }
    
  

  render() {
    return (
      <div className="GiflistContainer">
        <GifSearch handleSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer
