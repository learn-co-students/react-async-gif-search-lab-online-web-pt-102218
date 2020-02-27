import React, {Component} from 'react'



export default props => {
    console.log(props);
    return (
      <div>
          {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
      </div>
    )
  }