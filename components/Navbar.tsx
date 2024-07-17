import React from "react";
import Logo from "./Logo";
// import { IoSearchSharp} from 'react-icons/io';
import { IoSearchSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="bg-blue pt-4 pb-2 px-2 max-w-container">
      <nav>
        <div className="w-full flex justify-between border-b-[1px] border-b-white">
          <Logo />
          <ul className="flex gap-2">
            <li>
              <form action="">
                <div className="relative">
                  <input className="rounded-xl" type="search" name="" id="" />
                  <button
                    className="absolute top-1 right-1 bg-yellow"
                    type="submit"
                  >
                    <IoSearchSharp />
                  </button>
                </div>
              </form>
            </li>
            <li>
              <a href="">
                Sign in <br /> Account
              </a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
          </ul>
        </div>
        <div className="w-full flex text-white justify-between border-t-white py-2">
          <address>
            <p>Yenagoa, bayelsa</p>
          </address>
          <ul className="flex gap-2 font-bold">
            <li>
              <a href="">Deals</a>
            </li>
            <li>
              <a href="">Shirts</a>
            </li>
            <li>
              <a href="">Jeans</a>
            </li>
            <li>
              <a href="">Shoes</a>
            </li>
            <li>
              <a href="">T-shirts</a>
            </li>
          </ul>
        </div>
        <div />
      </nav>
    </div>
  );
};

export default Navbar;
