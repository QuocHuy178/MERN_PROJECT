import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
 
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged, setIsLogged] = state.userAPI.isLogged
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart

    const logoutUser = async () =>{
      await axios.get('/user/logout')
      localStorage.removeItem('firstLogin')
      // localStorage.clear()
      window.location.href = "/";
      
      // window.location.href = "/";
  }

  const adminRouter = () =>{
      return(
          <>
              <li className>
                <Link to="/create_product" ><a href="">Create Product</a></Link>
              </li>
              <li className>
                <Link to="/category" ><a href="">Categories</a></Link>
              </li>
          </>
      )
  }

  const loggedRouter = () =>{
      return(
          <>
               <li className>
                <Link to="/history" ><a href="">History</a></Link>
              </li>
              <li className>
                <Link to="/" onClick={logoutUser} ><a href="">Logout</a></Link>
              </li>
          </>
      )
  }

  

    return (
      <div id="header">
  <div className="container">
    <div id="welcomeLine" className="row">
      <div className="span6">Welcome!<strong> <Link to="/">{isAdmin ? 'Admin' : 'GiaDungShop'}</Link></strong></div>
      <div className="span6">
        <div className="pull-right">
          {/* <a href="product_summary.html"><span className>Fr</span></a>
          <a href="product_summary.html"><span className>Es</span></a>
          <span className="btn btn-mini">En</span>
          <a href="product_summary.html"><span>£</span></a>
          <span className="btn btn-mini">$155.00</span>
          <a href="product_summary.html"><span className>$</span></a> */}
          <Link to="/Cart" >          
            <a href=""><span className="btn btn-mini btn-primary"><i className="icon-shopping-cart icon-white" /> [ {cart.length} ] Itemes in your cart </span> </a> 
          </Link>
      
        </div>
      </div>
    </div>
    {/* Navbar ================================================== */}
    <div id="logoArea" className="navbar">
      <a id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </a>
      <div className="navbar-inner">
      <Link to="/" >
        <a className="brand" href=""><img src="themes/images/logo.png" alt="Bootsshop" /></a>
      </Link>
        
        <form className="form-inline navbar-search" method="post" action="products.html">
          <input id="srchFld" className="srchTxt" type="text" />
          <select className="srchTxt">
            <option>All</option>
            <option>CLOTHES </option>
            <option>FOOD AND BEVERAGES </option>
            <option>HEALTH &amp; BEAUTY </option>
            <option>SPORTS &amp; LEISURE </option>
            <option>BOOKS &amp; ENTERTAINMENTS </option>
          </select> 
          <button type="submit" id="submitButton" className="btn btn-primary">Go</button>
        </form>
        <ul id="topMenu" className="nav pull-right">
          <li className>
            <Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link>
          </li>
          {
            isAdmin ? '' :
            <li className>
              <Link to="/Cart" ><a href="">Giỏ Hàng</a></Link>
          </li>
          }
          
          {/* <li className><a href="contact.html">Contact</a></li> */}
          {isAdmin && adminRouter()}
          {
            isLogged ? loggedRouter() : 
            <li className>
              <Link to="/Login" ><a href="" role="button" style={{paddingRight: 0}}><span className="btn btn-large btn-success">Login</span></a></Link>
            </li>
          }
          
        </ul>
      </div>
    </div>
  </div>
</div>

    )
    
}

export default Header
