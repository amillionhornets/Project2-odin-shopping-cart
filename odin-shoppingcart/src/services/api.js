export const getProducts = async () => {
    const response = await fetch('http://localhost:3030/products');
    const data = await response.json();
    return data;
  };