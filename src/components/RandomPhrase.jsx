import React from 'react'

const RandomPhrase = ({quote}) => {
  
    const { author, phrase } = quote;
  
  return (
    <div>
        <p>{phrase}</p>
        <p>Fuente: {author}</p>
    </div>
  )
}

export default RandomPhrase;