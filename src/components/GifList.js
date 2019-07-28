import React from 'react'

const GifList = (props) => {
  
  const showGif = () => {
    return props.gifs.map((data, index) => {
      return <li key={index}>
              <img src={data.url} alt="" />
             </li>
    })
  }
  return<ul>{showGif()}</ul>
}

export default GifList
