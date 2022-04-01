import React from 'react'
import { Link } from 'react-router-dom'
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin}) {
    return (
        <li className="span3">
          {
            isAdmin && <input type="checkbox" checked={product.checked} 
             />
          }
      <div className="thumbnail">
        <a href=""><img className="radius products-item" src={product.images.url} alt="" /></a>
        <div className="caption">
          <h5 title={product.title}>{product.title}</h5>
          <p> 
                ${product.description}
          </p>
          <BtnRender product={product} />
        </div>
      </div>
    </li>
        // <div className="product_card">
        //     <img src={product.images.url}  />
        //     <div className="product_box">
        //         <h2 title={product.title} >{product.title}  </h2>
        //         <span>${product.price}</span>
        //         <p>${product.description}</p>
        //     </div>
        // </div>
    )
}

export default ProductItem
