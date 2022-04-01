import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'
// import Menu from './icon/menu.svg'
// import Close from './icon/close.svg'
// import Cart from './icon/cart.svg'
// import {Link} from 'react-router-dom'
// import axios from 'axios'

function Footer() {
    const value = useContext(GlobalState)
    return (
<div>
  <div id="footerSection">
    <div className="container">
      <div className="row">
        <div className="span3">
          <h5>Tài khoản</h5>
          <a href="login.php">Tài khoản của bạn</a> <a href="login.php">Thông
            tin</a> <a href="login.php">Lịch sử mua hàng</a>
        </div>
        <div className="span3">
          <h5>Thông tin</h5>
          <a href="contact.php">Liên hệ</a> <a href="register.php">Đăng ký</a>
        </div>
        <div className="span3">
          <h5>Cửa hàng</h5>
          <a href="#">Sản phẩm mới</a> <a href="#">Top bán chạy</a> <a href="special_offer.php">Sản phẩm đặc biệt</a>
        </div>
        <div id="socialMedia" className="span3 pull-right">
          <h5>Mạng xã hội</h5>
          <a href="#"><img width={60} height={60} src="themes/images/facebook.png" title="facebook" alt="facebook" /></a> <a href="#"><img width={60} height={60} src="themes/images/twitter.png" title="twitter" alt="twitter" /></a> <a href="#"><img width={60} height={60} src="themes/images/youtube.png" title="youtube" alt="youtube" /></a>
        </div>
      </div>
    </div>
  
  </div>
  </div>

 

  
  
      
    )
    
}

export default Footer
