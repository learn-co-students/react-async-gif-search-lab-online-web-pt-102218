import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends Component{

    constructor(){
        super()
        this.state({
            gifs: '',
            querySearch: ''
        })
    }

    componentDidMount(){
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.querySearch}api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data
            })
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            querySearch: event.target.value
        })
        this.componentDidMount()
    };

    render(){
        return(
        <div>
            <GifList gifs={this.state.gifs}/>
            <GifSearch submitFunction={this.handleSubmit}/>
        </div>
        )
    }
}