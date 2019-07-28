import React from 'react'

class GifList extends React.Component {
constructor(props) {
  super(props)
  // this.state = { 
  //   gifs: []}

}



render() {
  return(
  <ul>
    {props.gifs.map(gif => (
      <img key={gif.url} src={gif.url} alt="gif" /> 
    ))}
  </ul>
  )

        
}

  
}

export default GifList
