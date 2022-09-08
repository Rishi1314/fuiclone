import React from 'react'
import comment1 from "./components/images/comment1.JPG"
import comment2 from "./components/images/comment2.JPG"



const StayConnected = () => {
  return (
    <div>
        <div>
            <div className='CenterTitle'>
                <h1>Stay connected with us</h1>
                <p>Tutor Master will cover the following topics.</p>
            </div>
            <div className='commentBox'>
                <div className='commentBox1'>
                <div className='commentBoxCard1'>
                  <div className='cbf1'>
                    <span>Notifications</span>  
                    <span className='c'>Mark as read</span>
                    
                  </div>
                  <img src={comment1} alt="" />   
                  <div></div>
                  <div className='cbf2 c'>View All</div> 
                </div>
                <div className='triangle'></div>
                </div>
                <div className='commentBoxCard2'>
                <img src={comment2} alt="" />  
                </div>
            </div>
        </div>
    </div>
  )
}

export default StayConnected