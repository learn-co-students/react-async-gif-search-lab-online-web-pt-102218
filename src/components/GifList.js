import React from 'react'

export default class GifList extends React.Component {

  renderGifs = () => {
    console.log(this.props.gifs[0])
    return (
      this.props.gifs.map((gif, idx) => {
        return (
            <li key={idx}>
          <div className="card">
              <img className="card-img-top" src={gif.images.original.url} alt={gif.title} />
              <br />
              <div className="card-title"><h3>{gif.title}</h3></div>
          </div>
              </li>
        )
      })
    )
  }

  render() {
    return (
      <ul className="gifList">
        {this.renderGifs()}
      </ul>
    )
  }
}