import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
        console.error('Error fetching product data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="pt-[50px] flex justify-between">
      <div>
        <img src={product.image} alt="product image" className="w-2/3 h-1/2" />
      </div>
      <dl className="border-blue">
        <dt>{product.title}</dt>
        <dd>{product.price}</dd>
      </dl>
    </div>
  );
};

export default ProductDetails;
