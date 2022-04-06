import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'

function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    
      
    return (
        <>
        <ul className="thumbnails">
            {
                products.map(product => {
                return <ProductItem key={products._id} product={product} 
                isAdmin={isAdmin} token={token}  callback={callback} setCallback={setCallback} />
            })
        }
        </ul>
        {products.length === 0 && <Loading/>}
        </>
    )
}

export default Products

 