import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PayPalButton from './PayPalButton'




function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item)=>{
                return prev + (item.price * item.quantity)
            },0)
            setTotal(total)
        }
        getTotal()
    }, [cart])

    const addToCart = async (cart) =>{
        await axios.patch('user/addcart', {cart}, {
            headers: {Authorization:token}
        })
    }

    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })
        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity ===1 ? item.quantity = 1 : item.quantity -= 1
            }
        })
        setCart([...cart])
        addToCart(cart)

    }
    
    const removeProduct = id => {
        if(window.confirm("Chắc Chắn Xóa Hông ??")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async(payment) => {

        const {paymentID, address} = payment;
        await axios.post('/api/payment', {cart, paymentID, address},{
            headers:{Authorization:token}
        })

        setCart([])
        addToCart([])
        alert("You have successfully an order")

    }

    if(cart.length==0)
            return <h2 style={{textAlign: "center" ,  fontSize: "5rem"}} >Cart Empty</h2>

    return (
       <div>{
                cart.map(product => ( 
                    <div key={product._id}>
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
                                    <input readOnly value={product.quantity} className="span1" style={{maxWidth: '34px'}}  id="appendedInputButtons" size={16} type="text" />
                                    <button onClick={() => decrement(product._id)} href="" className="btn" type="button">
                                        <i className="icon-minus" />
                                    </button>
                                    <button onClick={() => increment(product._id)} href="" className="btn" type="button">
                                        <i className="icon-plus" />
                                    </button>
                                    <button onClick={() => removeProduct(product._id)} href="" className="btn btn-danger" type="button">
                                        <i className="icon-remove icon-white" />
                                    </button>
                                </div>
                                </td>
                                <td>{product.price}</td>
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
                                <PayPalButton
                                total={total}
                                tranSuccess={tranSuccess}
                                />
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
