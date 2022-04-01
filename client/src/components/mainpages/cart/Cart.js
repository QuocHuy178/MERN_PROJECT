import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import { Link } from 'react-router-dom'


function Cart() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart
    const [total, setTotal] = useState(0)

    if(cart.length==0)
            return <h2 style={{textAlign: "center" ,  fontSize: "5rem"}} >Cart Empty</h2>

    return (
       <div>{
                cart.map(product => (
                    <div>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Tên</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                                <th>Tổng tiền sản phẩm</th>
                                <th>Tổng cộng</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                <img width={60} src={product.images.url} />
                                </td>
                                <td>{product.title}</td>
                                <td>
                                <div className="input-append">
                                    <input readOnly className="span1" style={{maxWidth: '34px'}} defaultValue="" id="appendedInputButtons" size={16} type="text" />
                                    <a href="" className="btn" type="button">
                                    <i className="icon-minus" />
                                    </a>
                                    <a href="" className="btn" type="button">
                                    <i className="icon-plus" />
                                    </a>
                                    <a href="" className="btn btn-danger" type="button">
                                    <i className="icon-remove icon-white" />
                                    </a>
                                </div>
                                </td>
                                <td>{product.price}VND</td>
                                <td>123123</td>
                                <td>12345</td>
                            </tr>
                           
                            </tbody>
                        </table>
  
                    
                  </div>
            ))
                }
                 <tr>
                                <td colSpan={6} style={{textAlign: 'right'}}><strong>Tổng cộng = {total} </strong>
                                </td>
                                <td className="label label-important" style={{display: 'block'}}> <strong>VND</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={12} style={{textAlign: 'right'}}>
                                <strong>
                                    <a href>Xóa tất cả sản phẩm </a>
                                </strong>
                                </td>
                            </tr>
            </div>
            

    )
}

export default Cart
