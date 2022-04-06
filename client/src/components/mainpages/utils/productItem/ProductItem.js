import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import BtnRender from './BtnRender'
import axios from 'axios'
import Loading from '../loading/Loading'

function ProductItem({product, isAdmin, token, callback, setCallback}) {
  const [loading, setLoading] = useState(false)
  const deleteProduct = async() => {
      try {
        setLoading(true)
        const destroyImg = await axios.post('/api/destroy',{public_id: product.images.public_id},{
          headers: {Authorization:token}
        })
        const deleteProduct = await axios.delete(`/api/products/${product._id}`,{
          headers: {Authorization:token}
        })
        await destroyImg
        await deleteProduct
        setLoading(false)
        setCallback(!callback)
      } catch (err) {
        alert(err.response.data.msg)
      }
  }
  if(loading) return <div className="span3"><Loading/></div>
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
                  <BtnRender product={product} deleteProduct={deleteProduct} />
                </div>
              </div>
            </div>
        
  
    )
}

export default ProductItem
