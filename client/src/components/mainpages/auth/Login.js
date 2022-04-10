import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [user, setUser] = useState({
    email:'', password: ''
})

const onChangeInput = e =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
}

const loginSubmit = async e =>{
    e.preventDefault()
    try {
        await axios.post('/user/login', {...user})

        localStorage.setItem('firstLogin', true)
        
        window.location.href = "/";
    } catch (err) {
        alert(err.response.data.msg)
    }
}
    return (
        <div className="span9">
  <ul className="breadcrumb">
    <li><a href="index.php">Trang chủ</a> <span className="divider">/</span></li>
    <li className="active">Đăng nhập</li>
  </ul>
  <h3> Đăng nhập</h3>
  <hr className="soft" />
  <div className="row">
    <div className="span1"> &nbsp;</div>
    <div className="span4">
      <div className="well">
        <form onSubmit={loginSubmit}>
          <div className="control-group">
            <label className="control-label" htmlFor="inputEmail1">Email</label>
            <div className="controls">
              <input className="span3" name="email" value={user.email} type="email" id="inputEmail1" placeholder="Email" required onChange={onChangeInput}/>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" htmlFor="inputPassword1">Mật khẩu</label>
            <div className="controls">
              <input type="password" name="password" value={user.password} className="span3" id="inputPassword1" placeholder="Mật khẩu" autoComplete="on" required onChange={onChangeInput} />
            </div>
          </div>
          <div className="control-group">
            <div className="controls">
              <button className="btn btn-large btn-success" type="submit" name="login">Đăng nhập </button>
              <Link to="/register" ><a href="">Đăng kí</a></Link>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default Login
