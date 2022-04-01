import React from 'react'
import { Link } from 'react-router-dom'
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin}) {
    return (
      
      //  <ul className="breadcrumb">
      //   <li><a href="index.html">Home</a> <span className="divider">/</span></li>
      //   <li className="active">Products Name</li>
      // </ul> 
     
    
      //  <form className="form-horizontal span6">
      //   <div className="control-group">
      //     <label className="control-label alignL">Sort By </label>
      //     <select>
      //       <option>Priduct name A - Z</option>
      //       <option>Priduct name Z - A</option>
      //       <option>Priduct Stoke</option>
      //       <option>Price Lowest first</option>
      //     </select>
      //   </div>
      // </form> 
  
         
            <div className="span3">
              <div className="thumbnail">
                <a href=""><img className="radius products-item" src={product.images.url} alt="" /></a>
                <div className="caption">
                  <h5>{product.title}</h5>
                  <p> 
                    {product.description}
                  </p>
                  <BtnRender product={product} />
                </div>
              </div>
            </div>
        
  
    )
}

export default ProductItem
