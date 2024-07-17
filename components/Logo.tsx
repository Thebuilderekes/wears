import React from "react";

import { lusitana } from "../public/assets/fonts/fonts.ts";
const Logo = () => {
  return (
    <div>
      <a
        className={`${lusitana.className} mb-4 text-xl md:text-2xl text-bold`}
        href="/"
      >
        Thriftini
      </a>
    </div>
  );
};

export default Logo;
