import React from 'react'

import imagePng from '../images/mainPage/backgroundMain.png'
import '../css/main/index.css'
import ThreeMatches from '../components/ThreeMatches'

const MainPage = () => {
  return (
    <div className='container'>
      <main className='main'>
        <img className='main__background' src={imagePng} alt="Background-image" />
        <ThreeMatches/>
      </main>
    </div>
  )
}

export default MainPage