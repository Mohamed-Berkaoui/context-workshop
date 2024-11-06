import React, { createContext, useReducer } from 'react'

export const cartStore =createContext()

function reducer(state,action){
    switch(action.type){
        case 'ADD':
            const check=state.find(item=>item.product.id===action.payload.id)
            if(check){
                return state.map(item=>item.product.id===action.payload.id?{...item,quantity:item.quantity+1}:item)
            }
        
            return [...state,{product:action.payload,quantity:1}]
        case 'REMOVE':
            return state.filter(item=>item.product.id!==action.payload.id)
        case 'INCREMENT':
            return state.map(item=>item.product.id===action.payload.id?{...item,quantity:item.quantity+1}:item)
        case "DECREMENT":
            return state.map(item=>item.product.id===action.payload.id?item.quantity>1?{...item,quantity:item.quantity-1}:item:item)

        default:
            return state
    }
}

export const incAction=function(param){
    return{type:'INCREMENT',payload:param}
}
export const decAction=function(param){
    return{type:'DECREMENT',payload:param}
}
export const deleteAction=function(param){
    return{type:'REMOVE',payload:param}
}
export const addAction=function(param){
    return {type:"ADD",payload:param}
}

function Cart({children}) {
    const [cart,dispatchCart]=useReducer(reducer,[])
console.log(cart)
  return (
    <cartStore.Provider value={{cart,dispatchCart}}>
{children}
    </cartStore.Provider>
  )
}

export default Cart