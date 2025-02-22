import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
 const router = useRouter();
 const [product, setProduct] = useState<any>({});
 const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
 setIsLoading(true);
 setProduct(router.query);
 }, []);
 return (

  <div className="pt-[50px] flex justify-between">
 <div>
  <img src={product.image} alt="product image" className="w-2/3 h-1/2" />
  </div>
  <dl classsName= "border-blue">
  <dt>{product.title}</dt>
  <dd>{product.price}</dd>
  </dl>
 </div>
 );
};

export default ProductDetails;

