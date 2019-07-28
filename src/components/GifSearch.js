import React from 'react'

class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = { 
      search: []}
  
  }
handleChange = event => {
  this.setState( {
    search: event.target.value 
  })
}

  render () {
      return (
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      );
  }
}

  export default GifSearch 