import React, { Component } from 'react'

export default class GifList extends Component {
  constructor() {
    super()
    this.generateGifs = this.generateGifs.bind(this)
  }


  generateGifs() {
     return this.props.gifs.map((gif) => {
      return <li><img src={gif.images.original.url}/></li>
    })
  }

  generateLis(gif) {
    return <li>{this.newGif(gif)}</li>
  }

  newGif(gif) {
    return <img src={gif.images.original.url}/>


  }

  render() {
    return(
      <div>
        <ul>
          {this.generateGifs()}
        </ul>
      </div>
    )
  }
}
