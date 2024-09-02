import React from 'react'
import './HeroSection.css'
import Carousell from './Carousel'
const HeroSection = () => {
  return (
    <div className="grid-container">
      <div className="left">
        <Carousell/>
      </div>
      <div className="right">
        <div className="top">Top Div</div>
        <div className="bottom">Bottom Div</div>
      </div>
    </div>
  )
}

export default HeroSection