import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import { Link } from 'react-router-dom'

// import Menu from './icon/menu.svg'
// import Close from './icon/close.svg'
// import Cart from './icon/cart.svg'
// import {Link} from 'react-router-dom'
// import axios from 'axios'

function Sidebar() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart

    return (
		<div id="sidebar" className="span3">
  <div className="well well-small">
  <Link to="/Cart" >
    <a id="myCart" href=""><img src="themes/images/ico-cart.png" alt="cart" />{cart.length} Items in your cart  <span className="badge badge-warning pull-right">$155.00</span></a>
  </Link>

  </div>
  <ul id="sideManu" className="nav nav-tabs nav-stacked">
    <li className="subMenu open"><a> ELECTRONICS [230]</a>
      <ul>
        <li><a className="active" href="products.html"><i className="icon-chevron-right" />Cameras (100) </a></li>
        <li><a href="products.html"><i className="icon-chevron-right" />Computers, Tablets &amp; laptop (30)</a></li>
        <li><a href="products.html"><i className="icon-chevron-right" />Mobile Phone (80)</a></li>
        <li><a href="products.html"><i className="icon-chevron-right" />Sound &amp; Vision (15)</a></li>
      </ul>
    </li>
  </ul>
  <br />
  <div className="thumbnail">
    <img src="themes/images/products/panasonic.jpg" alt="Bootshop panasonoc New camera" />
    <div className="caption">
      <h5>Panasonic</h5>
      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
    </div>
  </div><br />
  <div className="thumbnail">
    <img src="themes/images/products/kindle.png" title="Bootshop New Kindel" alt="Bootshop Kindel" />
    <div className="caption">
      <h5>Kindle</h5>
      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
    </div>
  </div><br />
  <div className="thumbnail">
    <img src="themes/images/payment_methods.png" title="Bootshop Payment Methods" alt="Payments Methods" />
    <div className="caption">
      <h5>Payment Methods</h5>
    </div>
  </div>
</div>

      
    )
    
}

export default Sidebar
