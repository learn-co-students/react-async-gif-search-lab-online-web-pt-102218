import React from 'react'

export default class GifSearch extends React.Component {

  state = {
    searchText: ""
  }

  handleSubmitSearch = (event) => {
    event.preventDefault();
    this.props.onSubmitSearch(this.state.searchText)
  }

  handleSearchInput = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    return (
      <div className="search">
        <input type="text" value={this.state.searchText} onChange={this.handleSearchInput} />
        <button onClick={this.handleSubmitSearch}>Submit</button>
      </div>
    )
  }
}

GifSearch.defaultProps = {
  onSubmitSearch: (text) => {
    console.log(text)
  }
}