import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';

const ShopPage = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);
  
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const addToCart = (product, quantity) => {
    console.log(product)
    console.log(quantity)
    setCart((prevCart) => [...prevCart, { ...product, quantity }]);
  };

  return (
    <div>
      <h2 className='font-bold text-2xl text-center'>Catalog</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
