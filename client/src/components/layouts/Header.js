import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import Filters from '../mainpages/products/Filters'

 
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
                <Link to="/create_product" >Thêm Sản Phẩm</Link>
              </li>
              <li className>
                <Link to="/category" >Danh Mục</Link>
              </li>
          </>
      )
  }

  const loggedRouter = () =>{
      return(
          <>
               <li className>
                <Link to="/history" >Lịch sử</Link>
              </li>
              <li className>
                <Link to="/" onClick={logoutUser} >Đăng xuất</Link>
              </li>
          </>
      )
  }

  

    return (
      <div id="header">
  <div className="container">
    <div id="welcomeLine" className="row">
      <div className="span6">Chào!<strong> <Link to="/">{isAdmin ? 'Admin' : 'GiaDungShop'}</Link></strong></div>
      <div className="span6">
        <div className="pull-right">
          {/* <a href="product_summary.html"><span className>Fr</span></a>
          <a href="product_summary.html"><span className>Es</span></a>
          <span className="btn btn-mini">En</span>
          <a href="product_summary.html"><span>£</span></a>
          <span className="btn btn-mini">$155.00</span>
          <a href="product_summary.html"><span className>$</span></a> */}
          <Link to="/Cart" >          
            <a href=""><span className="btn btn-mini btn-primary"><i className="icon-shopping-cart icon-white" /> [ {cart.length} ] sản phẩm trong giỏ </span> </a> 
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
      <div className="navbar-inner" style={{display:'flex',justifyContent:'space-around'}}>
      <Link to="/" >
        <a className="brand" href=""><img src="themes/images/logo.png" alt="Bootsshop" /></a>
      </Link>
      <Filters/>
        <ul id="topMenu" className="nav pull-right">
          <li className>
            <Link to="/">{isAdmin ? 'Sản phẩm' : ''}</Link>
          </li>
          {
            isAdmin ? '' :
            <li className>
              <Link to="/Cart" >Giỏ Hàng</Link>
          </li>
          }
          
          {/* <li className><a href="contact.html">Contact</a></li> */}
          {isAdmin && adminRouter()}
          {
            isLogged ? loggedRouter() : 
            <li className>
              <Link to="/Login" ><a href="" role="button" style={{paddingRight: 0}}><span className="btn btn-large btn-success">Đăng nhập</span></a></Link>
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
