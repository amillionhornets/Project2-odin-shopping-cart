import React, { useState } from 'react'

const ProductCard = ({product, addToCart}) => {
    const [quantity, setQuantity] = useState(1)
    const increment = () => setQuantity(quantity + 1)
    const decrement = () => { if(quantity > 1) setQuantity(quantity - 1)}

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return(
    <div className='card'>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <div>
            <button onClick={decrement}>-</button>
            <input type="number" value={quantity} readOnly></input>
            <button onClick={increment}>+</button>
        </div>
        <button onClick={handleAddToCart}>Add to your cart!</button>
    </div>
    )
}
export default ProductCard