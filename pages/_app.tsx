import "@/styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
