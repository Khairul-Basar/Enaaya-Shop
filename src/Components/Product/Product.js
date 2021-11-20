import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faStar,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product)
    const {img,name,price,seller,stock,star,starCount} = props.product
    const btnIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const ratIcon = <FontAwesomeIcon icon={faStar}/>
    const strCountIcon = <FontAwesomeIcon icon={faThumbsUp}/>
    return (
        <div className="product">
                <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p className="product-rating"><span className="rateIcon">{star} ~ <Rating initialRating={star}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly></Rating> </span><span className="count-icon">{strCountIcon} {starCount}</span></p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=> props.handleAddtoCart(props.product)}>{btnIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;