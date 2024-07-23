import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ProductCard({ product }) {
  return (
    <li
      className="border border-blue flex flex-col gap-2 p-2"
      key={product._id}
    >
      <Image src={product.image} width={300} height={300} alt="product card" />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <div className="flex gap-2">
        <Link
          className="border flex justify-center items-center border-blue bg-blue p-2 text-gray-200 w-[150px]"
          href="#"
        >
          Add to Cart
        </Link>
        <Link
          href={{
            pathname: `product/${product._id}`,
            query: {
              _id: product._id,
              title: product.title,
              image: product.image,
              price: product.price,
            },
          }}
          as={`product/${product._id}`}
          className="border flex justify-center items-center border-blue bg-blue p-2 text-gray-200 w-[150px]"
        >
          Details
        </Link>
      </div>
    </li>
  );
}
