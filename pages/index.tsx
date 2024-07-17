import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Banner from "../components/Banner";
export default function Home() {
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
      <Navbar />
      <main>
        <section>
          <Banner />
        </section>
        <p>
          Watch this space. This is where the best thrift store in Africa will
          live.
        </p>
      </main>
    </>
  );
}
