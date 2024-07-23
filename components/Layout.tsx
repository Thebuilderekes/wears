import React from "react";
import Navbar from "./Navbar";
import { ReactElement } from "react";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
