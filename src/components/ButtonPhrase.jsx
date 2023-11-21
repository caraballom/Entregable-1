import React from 'react'
import getRandomFromArr from '../services/getRandomFromArr'
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

const ButtonPhrase = ({setPhraseRandom, setBgApp}) => {
   
 const handleChangePhrase= () => {
    setPhraseRandom(getRandomFromArr(phrases))
    setBgApp (getRandomFromArr(bgArr))   
 }
 return (
   <button
      onClick={handleChangePhrase}
      className='app__button'
   >
      Ver otro
   </button>
  )
}

export default ButtonPhrase