import React from 'react'
import "./App.css"
import { Button} from '@chakra-ui/react'
import icon1 from "./components/images/icon1.JPG"
import icon2 from "./components/images/icon2.JPG"
import icon3 from "./components/images/icon3.JPG"

const UnderAbout = () => {
  return (
    <div>
        <div className='CenterTitle'>
            <h1>On what you will be trained?</h1>
            <p>Tutor master will cover the following topics.</p>
        </div>
        <div className='cardDeck'>
            <div className='circleCard'>
                <ul className='cardText'>
                    <li><h1>Country Topics</h1></li>
                    <li><p>USP #1 showcased here<br/>with brief as needed</p></li>
                    <li><Button>Know More</Button></li></ul>
                <div className='circle'>
                    <img src={icon1}/>
                </div>
            </div>
            <div className='circleCard'>
                <ul className='cardText'>
                    <li><h1>Product Topics</h1></li>
                    <li><p>USP #1 showcased here<br/>with brief as needed</p></li>
                    <li><Button>Know More</Button></li></ul>
                <div className='circle'>
                <img src={icon2}/>
                </div>
            </div>
            <div className='circleCard'>
                <ul className='cardText'>
                    <li><h1>Blanket Topics</h1></li>
                    <li><p>USP #1 showcased here<br/>with brief as needed</p></li>
                    <li><Button>Know More</Button></li></ul>
                <div className='circle'>
                <img src={icon3}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UnderAbout