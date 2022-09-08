import React from 'react'
import whyicon1 from "./components/images/whyicon1.JPG"
import whyicon2 from "./components/images/whyicon2.JPG"
import whyicon3 from "./components/images/whyicon3.JPG"


const WhyTutor = () => {
  return (
    <div>
        <div className='CenterTitle'>
            <h1>Why Tutor Master</h1>
            <p>Tutor Master will cover the following topics</p>
        </div>
        <div className='cardDeck'>
            <div className='whyCard'>
                <div className='whyIcon1'><img src={whyicon1}/></div>
                <div className='whyCardText'> 
                    <h1>The only source of learning pre-sales activities</h1>
                    <h1>Lorem ipsum dolor sit aeapedit sequi laboriosam doloribus perspiciatis nemo incidunt? A!</h1>
                </div>
            </div>
            <div className='whyCard'>
                <div className='whyIcon2'><img src={whyicon2}/></div>
                <div className='whyCardText'> 
                    <h1>The only source of learning pre-sales activities</h1>
                    <h1>Lorem ipsum dolor sit aeapedit sequi laboriosam doloribus perspiciatis nemo incidunt? A!</h1>
                </div>
            </div>
            <div className='whyCard'>
                <div className='whyIcon3'><img src={whyicon3}/></div>
                <div className='whyCardText'> 
                    <h1>The only source of learning pre-sales activities</h1>
                    <h1>Lorem ipsum dolor sit aeapedit sequi laboriosam doloribus perspiciatis nemo incidunt? A!</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyTutor