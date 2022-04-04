import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'

function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin

    const getProducts = async () => {
        const res = await axios.get('/api/products')
        setProducts(res.data.products)
        }
        useEffect(() =>{
            getProducts()
        },[])
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

 