import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    text: ''

  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <input type="text" name="text" placeholder="Search Gifs ..." value={this.state.text}
          onChange={this.onChange} />
          <input type="submit" value="Search" />
        </form>       
      </div>
    )
  }
}

export default GifSearch
