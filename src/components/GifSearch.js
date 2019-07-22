import React, { Component } from 'react'

export default class GifSearch extends Component {

  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Phrase
          <input type='text' name='searchText' value={this.state.value} onChange={this.handleChange}/>
        </label>
        <button type='submit'>Search</button>
      </form>
    )
  }

}
