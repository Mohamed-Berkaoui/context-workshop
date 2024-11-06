import React, { useContext } from 'react'
import { cartStore, decAction, deleteAction, incAction } from '../context/Cart'

function Cart() {
    const CartStore=useContext(cartStore)
  return (
    <div className='cart'>
    {CartStore.cart.map(item=>
        <div className='cartbox'>
            <p>{item.product.title}</p>
            <p>{item.product.price*item.quantity}</p>
           <div>
           <button onClick={()=>CartStore.dispatchCart(incAction(item.product))}>+</button>
            <h5>{item.quantity}</h5>
            <button onClick={()=>CartStore.dispatchCart(decAction(item.product))} disabled={item.quantity==1}>-</button>
            <button onClick={()=>CartStore.dispatchCart(deleteAction(item.product))}>delete</button>
           </div>
        </div>
    )}


    </div>
  )
}

export default Cart