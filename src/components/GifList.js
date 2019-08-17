import React, { Component } from 'react'


export default class GifList extends Component {

    render() {
        return (
            <div>{this.props.list}</div>
        )
    }
}