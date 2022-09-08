import React from 'react'
import tutor from "./components/images/tutors.JPG"


const Who = () => {
  return (
    <>
    <div className='CenterTitle'>
        <h1>Who will train you?</h1>
        <p>Tutor Master will cover the following topics</p>
    </div>
    <div className='tutorCards'>
        <div className='tutorCardsRow'>
            <div className='tutorCard'>
                <img src={tutor} alt="" />
                <div className='tutorDetails'>
                    <div className='xt'>
                    <h1>James Williams</h1>
                    <p>Bsc Msc<br/>Cardiology</p>
                    </div>
                    <div className='cbf2 c'>Know More</div>
                </div>
            </div>
            <div className='tutorCard'>
                <img src={tutor} alt="" />
                <div className='tutorDetails'>
                    <div className='xt'>
                    <h1>James Williams</h1>
                    <p>Bsc Msc<br/>Cardiology</p>
                    </div>
                    <div className='cbf2 c'>Know More</div>
                </div>
            </div>
        </div>
        <div className='tutorCardsRow'>
            <div className='tutorCard'>
                <img src={tutor} alt="" />
                <div className='tutorDetails'>
                    <div className='xt'>
                    <h1>James Williams</h1>
                    <p>Bsc Msc<br/>Cardiology</p>
                    </div>
                    <div className='cbf2 c'>Know More</div>
                </div>
            </div>
            <div className='tutorCard'>
                <img src={tutor} alt="" />
                <div className='tutorDetails'>
                    <div className='xt'>
                    <h1>James Williams</h1>
                    <p>Bsc Msc<br/>Cardiology</p>
                    </div>
                    <div className='cbf2 c'>Know More</div>
                </div>
            </div>
        </div>
        <div className='tutorCardsRow'></div>
    </div>
    </>
  )
}

export default Who