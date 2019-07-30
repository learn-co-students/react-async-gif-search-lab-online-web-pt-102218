import React, {Component} from 'react'

export default class GifSearch extends Component{

    constructor(){
        super()
        this.state({
            value: ''
        })
    }

    onChange = (input) => {
        this.setState({
            value: input
        })
      };
    render(){
        return(
            <form onSubmit={event => this.props.submitFuction(event)}>
                <input type="text" value={this.state.value} onChange={input => this.onChange(input)}></input>
            </form>
        )
    }
}