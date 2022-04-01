import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
function BtnRender({product}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
    
    return (
        <h4 style={{textAlign: 'center'}}>
          {
            isAdmin ?
            <>
          
              <Link id="btn_buy" to={`/edit_product/${product._id}`}>
                <a className="btn" href=""> Delete <i className="icon-shopping-cart" /></a> 

              </Link>

              <Link id="btn_buy" to={`/edit_product/${product._id}`}>
                <a className="btn" href=""> Edit <i className="icon-shopping-cart" /></a> 

              </Link>
              </>
              : <>
                <Link id="btn_view" to={`/detail/${product._id}`}>
                <a className="btn" href=""> 
                  <i className="icon-zoom-in" />
                </a> 
                </Link>

                <Link id="btn_buy" to="#!" onClick={()=>addCart(product)}>
                  <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> 

                </Link>
              </>
          }
        </h4>
    )
}

export default BtnRender
