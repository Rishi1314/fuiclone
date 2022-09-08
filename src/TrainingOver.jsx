import React from 'react'
import train from "./components/images/train.JPG"


const TrainingOver = () => {
  return (
    <div className='CenterTitle training'>
        <h1>Training Overview</h1>
        <img src={train} alt="train" />
    </div>
  )
}

export default TrainingOver