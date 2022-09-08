import React from 'react'
import "./App.css"
import aboutHero from "./components/images/about.JPG"
import { BsCheckLg} from "react-icons/bs";
import { Button} from '@chakra-ui/react'

const About = () => {
  return (
    <div className='storySection'>
        <ul className='storyText storyCard'>
            <li><h1>The story of Tutor <br/> Master?</h1></li>
            <li><p>Lorem ipsum dolor, sit amet consectetur consectetur<br/>
            adipisicing elit. Doloribus eveniet soluta consectetur<br/>
            sapiente tempora corporis animi essertf consectetur<br/> cupiditate dolorem molestiae <br/></p></li>
            <li>
                <div className='usp'>
                <BsCheckLg className='tic'/>
                <p>USP #1 showcased here with brief as needed</p>
                </div>
                <div className='usp'>
                <BsCheckLg className='tic'/>
                <p>USP #1 showcased here with brief as needed</p>
                </div>
                <div className='usp'>
                <BsCheckLg className='tic'/>
                <p>USP #1 showcased here with brief as needed</p>
                </div>
                
            </li>
            <li>
            <Button size='lg'>
            Know More
            </Button>
            </li>    
        </ul>
        <div >
            
        </div>
        <div className='aboutHero storyCard'>
            <img src={aboutHero}/>
        </div>
    </div>
  )
}

export default About