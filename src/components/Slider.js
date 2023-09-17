import React from 'react'
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import img3 from './imgs/img3.webp'
import './Slider.css'
export default function Slider() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 height-500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
