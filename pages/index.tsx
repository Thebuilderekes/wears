import React from 'react';
import Head from 'next/head';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
export default function Home({ productData }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Buy thrift clothing for men at affordable price from Thrifitini"
        />
        <title>Thriftini | Buy affordable wears for men</title>
      </Head>
      <main className="flex flex-col">
        <section>
          <Banner />
        </section>
        <section className="py-[100px]">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-9 px-4 py-4">
            {productData.map((product, key) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

let productData;

let fallbackData = [
  {
    _id: 1,
    title: 'Fallback Product 1',
    price: 10.99,
    image: '/assets/images/hotelroom2.jpg',
  },
  {
    _id: 2,
    title: 'Fallback Product 2',
    price: 10.99,
    image: '/assets/images/hotelroom3.jpg',
  },
  {
    _id: 3,
    title: 'Fallback Product 3',
    price: 12.99,
    image: '/assets/images/hotelroom2.jpg',
  },

  {
    _id: 4,
    title: 'Fallback Product 4',
    price: 10.99,
    image: '/assets/images/hotelroom2.jpg',
    // Add more fallback products as needed
  },

  {
    _id: 5,
    title: 'Fallback Product 5',
    price: 10.99,
    image: '/assets/images/hotelroom3.jpg',
  },

  {
    _id: 6,
    title: 'Fallback Product 6',
    price: 10.99,
    image: '/assets/images/hotelroom2.jpg',
    // Add more fallback products as needed
  },

  {
    _id: 7,
    title: 'Fallback Product 7',
    price: 10.99,
    image: '/assets/images/hotelroom2.jpg',
    // Add more fallback products as needed
  },

  {
    _id: 8,
    title: 'Fallback Product 8',
    price: 10.99,
    image: '/assets/images/hotelroom2.jpg',
    // Add more fallback products as needed
  },

  // Add more fallback products as needed
];

export const getServerSideProps = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    productData = await response.json();
  } catch (error) {
    console.error('Fetch failed; using fallback data', error);
    productData = fallbackData;
  }
  return {
    props: { productData },
  };
};
