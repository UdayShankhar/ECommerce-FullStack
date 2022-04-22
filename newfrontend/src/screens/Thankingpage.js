import React from 'react'
import sammy from "../images/sammy.png"
import "./Thankingpage.css"
import {Link} from "react-router-dom"

function Thankingpage() {
  return (
    <div className='final'>
    <div>
    <img src={sammy} alt='' className='delivery-image'/>
          </div>
    <div className='finalwords'>
        <h2>Thank you for ordering from us!</h2><br></br>
        <h5>Your package will be delivered within next 2 business days</h5>
        <p style={{marginTop:'15px'}}>(Stay tuned for the best offers and deals in your city)</p>
         <Link to='/'>
             <button className='t-home'>Home</button>
         </Link>
         <Link to="/">
             <button className='t-shop'>Shop more</button>
         </Link>
          </div>
    </div>
  )
}

export default Thankingpage