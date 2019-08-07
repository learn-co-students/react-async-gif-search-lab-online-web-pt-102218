import React, { Component } from 'react'

export default class GifSearch extends Component {

	constructor(props){
		super(props)
		this.state = {query: ""}
	}

	handleQueryChange = e => {
		this.setState({
			...this.state,
			query: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.performSearch(this.state.query)
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit} style={{display: "flex", margin: "auto",
					boxShadow: "black 5px 5px 20px -5px", width: "400px"}}>
				<input type="text" name="query" onChange={this.handleQueryChange}
						style={{width: "300px", padding: "0.5em"}}/>
				<input type="submit" value="Search"
						style={{ width: "100px", padding: "0.5em"}}/>
			</form>
		)
	}

}
