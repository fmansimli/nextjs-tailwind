import { FC } from "react";

interface INavbar {
  //
}

const Navbar: FC<INavbar> = (props) => {
  return (
    <nav className="relative container mx-auto p-5">
      <div className="flex justify-between items-center">
        <div className="pt-2">
          <img src="/img/logo.svg" alt="logo" />
        </div>
        <div className="hidden md:flex space-x-16 ">
          <a href="#" className="hover:text-red-500">
            Pricing
          </a>
          <a href="#" className="hover:text-red-500">
            Product
          </a>
          <a href="#" className="hover:text-red-500">
            About Us
          </a>
          <a href="#" className="hover:text-red-500">
            Careers
          </a>
          <a href="/test" className="hover:text-red-500">
            Community
          </a>
        </div>
        <div className="">
          <a className="px-8 py-3 rounded-full bg-red-500 text-white hover:cursor-pointer shadow-sm">
            get started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
