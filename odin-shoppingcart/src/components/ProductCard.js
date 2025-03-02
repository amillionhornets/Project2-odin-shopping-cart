import React, { useState } from 'react'
import './input.css';
const ProductCard = ({product, addToCart}) => {
    const [quantity, setQuantity] = useState(1)
    const increment = () => setQuantity(quantity + 1)
    const decrement = () => { if(quantity > 1) setQuantity(quantity - 1)}

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return(
    <div className='border-collapse border-2 m-7'>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div className='text-center'>
            <button className='m-4 font-bold text-red-600' onClick={decrement}>-</button>
            <input type="number" className="w-5 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" value={quantity} readOnly></input>
            <button className='m-4 font-bold text-green-700' onClick={increment}>+</button>
        </div>
        <button onClick={handleAddToCart}>Add to your cart!</button>
    </div>
    )
}
export default ProductCard