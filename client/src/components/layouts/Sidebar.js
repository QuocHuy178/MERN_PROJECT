import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import { Link } from 'react-router-dom'
import CateSidebar from '../mainpages/categories/CateSidebar'

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
    <a id="myCart" href=""><img src="themes/images/ico-cart.png" alt="cart" />{cart.length} sản phẩm trong giỏ  <span className="badge badge-warning pull-right">$155.00</span></a>
  </Link>

  </div>
  < CateSidebar/>
  <br />
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
