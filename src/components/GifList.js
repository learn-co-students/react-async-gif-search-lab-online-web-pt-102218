import React, { Component } from 'react'

export default class GifList extends Component {
	render(){
		return (
			<div>
				{this.props.gifs.map(gif =>
					<img src={gif.url} width={gif.width} height={gif.height} key={gif.url} style={{
						margin: "1em",
						boxShadow: "black 5px 5px 20px -5px"
					}}></img>
				)}
			</div>
		)
	}
}
