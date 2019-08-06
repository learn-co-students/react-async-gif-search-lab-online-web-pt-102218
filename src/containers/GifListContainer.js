import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  // Fetches data from the giphy API as requested by the child GifSearch and passes the first three results
  // to the GifList child component
  state = {
    gifResults: []
  }

  fetchGifs = (searchText) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        gifResults: json.data.slice(0,3)
      })
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <GifList gifs={this.state.gifResults}/>
        </div>
        <div className="col-sm-6">
          <GifSearch onSubmitSearch={this.fetchGifs}/>
        </div>
      </div>
    )
  }
}