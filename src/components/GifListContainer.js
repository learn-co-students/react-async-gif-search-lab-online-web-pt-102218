import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends React.Component {
constructor() {
  super()
  this.state = { 
    gifs: []}

}

handleSubmit = (event) => {
  debugger 
  fetch(`http://api.giphy.com/v1/gifs/search?q=${event}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => {
      console.log(resp)
    } )
    // this.stateState({
    //   gifs: 

}
//  fetch('' => 
//   this.setState({gifs: }))
//   this.render() {
//     return <GifList gifs={this.state.gifs} /> }
//   }


render() {
  return (  <div>  
            <GifList gifs={this.state.gifs} />
            <GifSearch/> 
            </div> 
    
          ) 
}
}


export default GifListContainer 