import React from 'react'
import {FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"


const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='f1'>
                <h1>Knowledge Transfer</h1>
                <p>Lorem ipsum dolor sit amet <br/>consectetur, adipisicing elit. Doloribus iure inventore,<br/> optio modi recusandae expedita blanditiis placeat <br/>obcaecati dolores, autem illo, sed</p>
                <div className='footerIcons'>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaLinkedinIn/>
                </div>
            </div>
            <div className='f2'>
                <h1>Quick Links</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Trainings</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='f2'>
                <h1>Topics</h1>
                <ul>
                    <li>Blanket Topics</li>
                    <li>Country Topics</li>
                    <li>Product Topics</li>
                </ul>
            </div>
            <div className='f2'>
                <h1>Important Links</h1>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Disclamer</li>
                    <li>Sitemap</li>
                </ul>
            </div>
        </div>
        <div className='footer2'></div>
    </div>
  )
}

export default Footer