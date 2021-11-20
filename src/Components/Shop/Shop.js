import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]= useState([])
    const [carts, setCarts] = useState([])
    const [filterProducts,setFilterProducts]= useState([])

    const handleAddtoCart = (product) => {
        let newCart = [...carts, product]
        setCarts(newCart)
        addToDb(product.key)
    }

    useEffect(()=>{
        fetch(`./products.JSON`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setFilterProducts(data)
        })
    },[])

    useEffect(()=>{
        if(products.length){

            const savedCarts = getStoredCart()
            const storedCart = []
            for(const key in savedCarts){
                const selectedProducts = products.find(product=> product.key ===key)
                if(selectedProducts){
                    const quantity = savedCarts[key]
                    selectedProducts.quantity = quantity
                    storedCart.push(selectedProducts)
                }
            }
            setCarts(storedCart)
        }
    },[products])

    const searchHandle = (event) => {
        const searchText = event.target.value 
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilterProducts(matchedProducts)
    }

    return (
        <>
            <div className="search-container">
                <input 
                    type="text"
                    onChange={searchHandle}
                    placeholder="Search Products" 
                />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    
                {
                    filterProducts.map(product => {
                        return <Product key={product.key} product={product} handleAddtoCart={handleAddtoCart}></Product>
                    })
                }
                </div>
                <div>
                    <Cart carts={carts}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;