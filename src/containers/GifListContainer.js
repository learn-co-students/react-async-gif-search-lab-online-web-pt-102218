import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      gifs: []
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(phrase) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${phrase.value}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        gifs: json.data.slice(0,3)
      })
    })
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch submitHandler={this.submitHandler}/>
      </div>
    )
  }
}
