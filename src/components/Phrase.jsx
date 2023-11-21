import React from 'react'

const Phrase = ({phraseRandom}) => {
    
  return (
        <p className='app__phrase'>
            {phraseRandom.phrase}    
        </p>
  )
}

export default Phrase