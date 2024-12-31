import React from 'react'
import Review from './Review'

function Banner() {
  return (
    <>
    
    <div className="banner">
      <div className="content">
        <h2>Our Best Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt esse, hic quasi totam natus odit quaerat commodi dolores, cupiditate voluptate consequatur eius a minus quae ea repellendus delectus ullam.</p>
        <div className="review">
        <Review/>

        </div>
        <button>Read More</button>
      </div>
      <div className="img">
        <img src="https://images.pexels.com/photos/9649658/pexels-photo-9649658.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
      </div>
        </div>
        </>
  )
}

export default Banner