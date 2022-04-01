import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'
// import Menu from './icon/menu.svg'
// import Close from './icon/close.svg'
// import Cart from './icon/cart.svg'
// import {Link} from 'react-router-dom'
// import axios from 'axios'

function Slider() {
    const value = useContext(GlobalState)
    return (
		<div id="carouselBlk">
    <div id="myCarousel" className="carousel slide">
      <div className="carousel-inner">
        <div className="item active">
          <div className="container">
            <a href="register.html"><img style={{width: '100%'}} src="themes/images/carousel/1.png" alt="special offers" /></a>
            <div className="carousel-caption">
              <h4>Second Thumbnail label</h4>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="container">
            <a href="register.html"><img style={{width: '100%'}} src="themes/images/carousel/2.png" alt="" /></a>
            <div className="carousel-caption">
              <h4>Second Thumbnail label</h4>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="container">
            <a href="register.html"><img src="themes/images/carousel/3.png" alt="" /></a>
            <div className="carousel-caption">
              <h4>Second Thumbnail label</h4>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="container">
            <a href="register.html"><img src="themes/images/carousel/4.png" alt="" /></a>
            <div className="carousel-caption">
              <h4>Second Thumbnail label</h4>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="container">
            <a href="register.html"><img src="themes/images/carousel/5.png" alt="" /></a>
            <div className="carousel-caption">
              <h4>Second Thumbnail label</h4>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="container">
            <a href="register.html"><img src="themes/images/carousel/6.png" alt="" /></a>
            <div className="carousel-caption">
              <h4>Second Thumbnail label</h4>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
    </div> 
  </div>
  
      
    )
    
}

export default Slider
