import React, { Component } from 'react'


export default class GifSearch extends Component {

    state = {
        input: ''
    }

    handleChange = (event) => {
        event.persist()
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit() {
        this.props.handleSearch(this.state.input)
    }

    render() {
        return(
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="text" id="input" value={this.state.input} onChange={this.handleChange} />
            </form>
        )
    }
}