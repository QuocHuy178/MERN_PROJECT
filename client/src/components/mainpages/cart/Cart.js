import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Cart() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart

    if(cart.length==0)
            return <h2 style={{textAlign: "center" ,  fontSize: "5rem"}} >Cart Empty</h2>

    return (
        <div>
            {
                cart.map(product => {
                    <div>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity/Update</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td> <img width={60} src={product.images.url} alt="" /></td>
                            <td>{product.description}</td>
                            <td>
                            <div className="input-append"><input className="span1" style={{maxWidth: '34px'}} placeholder={1} id="appendedInputButtons" size={16} type="text" /><button className="btn" type="button"><i className="icon-minus" /></button><button className="btn" type="button"><i className="icon-plus" /></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white" /></button>				</div>
                            </td>
                            <td>{product.price}</td>
                            <td>$110.00</td>
                        </tr>
                        
                        <tr>
                            <td colSpan={6} style={{textAlign: 'right'}}><strong>TOTAL ($228 - $50 + $31) =</strong></td>
                            <td className="label label-important" style={{display: 'block'}}> <strong> $155.00 </strong></td>
                        </tr>
                        </tbody>
                    </table>
                   
                   		
                    <a href="products.html" className="btn btn-large"><i className="icon-arrow-left" /> Continue Shopping </a>
                    <a href="login.html" className="btn btn-large pull-right">Next <i className="icon-arrow-right" /></a>
                    </div>

               
                })

            }
        </div>
    )
}

export default Cart
