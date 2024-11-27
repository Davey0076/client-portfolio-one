import React from 'react'
import './Testimonials.css'



function Testimonials() {
  return (
   <div className='testimonials-wrapper'>
    <h2 className='testimonials-header'>Success Stories</h2>
    <div className='testimonials'>
        <div className="testimonials-container">
            <h3>James T.</h3>
            <p>
                "I was skeptical at first, but their professionalism and quality exceeded 
                my expectations. Will definitely use them again."
            </p>
        </div>
        <div className="testimonials-container">
            <h3>Emily R.</h3>
            <p>
                "TopTutors saved me during final weeks! Their timely and accurate solutions helped me pass with flying colors. Highly recommend!"
            </p>
        </div>
    </div>
   </div>
  )
}

export default Testimonials