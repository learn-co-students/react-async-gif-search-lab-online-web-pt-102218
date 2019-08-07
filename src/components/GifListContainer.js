import React, { Component } from 'react'
import GifSearch from './GifSearch';
import GifList from './GifList';

export default class GifListContainer extends Component {

	constructor(props){
		super(props)
		this.state = {gifs: []}
	}

	performSearch = query => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
			.then(resp => resp.json())
			.then(gifsJson => {
				this.setState({
					...this.state,
					gifs: gifsJson.data.map(gifJson => gifJson.images.original)
				})
			})
	}

	render(){
		return (
			<div>
				<GifSearch performSearch={query => this.performSearch(query)} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}

}
