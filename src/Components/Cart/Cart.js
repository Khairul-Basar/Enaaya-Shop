import React from 'react';

const Cart = (props) => {
// console.log(props.carts)
const carts = props.carts


    let total = 0
    let totalQuantity = 0
    for(const product of carts){
        if(!product.quantity){
            product.quantity = 1
        }
        totalQuantity = totalQuantity + product.quantity
        total = total + product.price * product.quantity
    }
// const totalReducer = (prev,product) => prev + product.price
// const total = carts.reduce(totalReducer,0)


const shipping = total>0 ? 15 : 0
const tax = total*10/100
const totalCost = total + shipping + tax
    

    return (
        <div>
            <h3>Product-Count: {totalQuantity}</h3>
            <p>Product-Cost: ${total.toFixed(2)}</p>
            <p>Delivary-cost: ${shipping}</p>
            <p>Vat: ${tax.toFixed(2)}</p>
            <p>Total-Cost: ${totalCost.toFixed(2)}</p>
        </div>
    );
};

export default Cart;