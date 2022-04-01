import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    return (
        <>
        <ul className="thumbnails">
            {
                products.map(product => {
                return <ProductItem key={products._id} product={product} 
                isAdmin={isAdmin}/>
            })
        }
        </ul>
        {products.length === 0 && <Loading/>}
        </>
    )
}

export default Products

 