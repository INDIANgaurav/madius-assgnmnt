import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav className="   sm:min-w-screen-2xl h-14 sm:h-20  bg-[#004733] flex items-center justify-between p-5 md:py-5 md:px-10 xl:p-5">
      <div className="flex items-center gap-10">
        <button className="text-2xl text-left text-white font-playwrite ml-4 font-bold">
          Better
        </button>
        <div className="hidden md:flex gap-3">
          <button className="hover:bg-white hover:text-black text-white rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4">
            About Us
          </button>

          <button className="hover:bg-white hover:text-black text-white rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4">
            Mortgage Calculator
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:bg-white hover:text-black text-white rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 border">
          <FaPhone />
        </button>
        <button className="hover:bg-white hidden sm:block hover:text-black text-white rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4">
          Sign in
        </button>
        <button className="hover:bg-[#004733] hover:text-white text-black rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 bg-green-500">
          Continue
        </button>
        {/* Hamburger Icon */}
        <button className="md:hidden" onClick={() => setToggleNav(!toggleNav)}>
          {toggleNav ? (
            <MdClose className="text-white" />
          ) : (
            <GiHamburgerMenu className="text-white" />
          )}
        </button>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`absolute z-10 top-0 left-0   bg-white text-black w-full h-screen transform transition-transform duration-300 ease-in-out ${
          toggleNav ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center mt-14">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black text-3xl"
            onClick={() => setToggleNav(false)}
          >
            <MdClose />
          </button>
          <button className="text-2xl text-left text-black font-playwrite ml-4 font-extrabold">
            Better
          </button>
          <button className="hover:bg-gray-100 text-black rounded-full py-1 font-normal transition-all ease-in-out duration-300 w-full text-center h-12">
            About Us
          </button>
          <button className="hover:bg-gray-100 text-black rounded-full py-1 font-normal transition-all ease-in-out duration-300 w-full text-center h-12">
            Mortgage Calculator
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
