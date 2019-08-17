import React, { Component } from 'react';

class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { query : '' };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.handleFetch(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default GifSearch;