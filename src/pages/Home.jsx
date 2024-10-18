import Navbar from "../Components/Navbar";

import { FaArrowTrendDown } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

import image from "../assets/image.webp";
import image2 from "../assets/still-quote-Arian.webp";
import image3 from "../assets/still-quote-Amanda.webp";
import image4 from "../assets/still-quote-Paul.webp";
import { useState } from "react";
import HomePage3rd from "../Components/HomePage3rd";
const Home = () => {
  const nameArr = ["Arian", "Amanda", "Paul"];

  const imgObj = [image2, image3, image4];

  const [clickedimage, setClickedImage] = useState(image2);

  const renderImage = (index) => {
    setClickedImage(imgObj[index]);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center bg-[#004733]  h-[810px]  sm:h-[930px]   ">
        <div className="flex justify-center items-center gap-4 -mt-[450px]  ">
          <FaArrowTrendDown className="text-blue-500 border rounded-full bg-white w-10 h-10 p-2" />
          <h1 className="text-lg md:text-[32px] text-white">
            {" "}
            Rate drop alert
          </h1>
        </div>

        <div>
          <div className="sm:relative  z-10">
            <h1 className="font-semibold m-0 p-0 w-auto tracking-tight md:tracking-tighter  text-center  pt-2 md:pt-0 text-[50px] md:text-4xl leading-tight md:leading-[72px] lg:leading-[118px] text-white lg:text-[118px]   ">
              The rate drop you&apos;ve <br /> been waiting for
            </h1>
          </div>
          <div className="absolute top-[340px ] z-0    ml-[30px] sm:-mt-[50px]  sm:ml-[50px] flex flex-col sm:flex-row justify-center items-center gap-10">
            <div>
              <button className="hover:bg-[#004733] hover:text-white font-semibold text-black rounded-full py-3 transition-all ease-in-out duration-300 h-12 px-6 bg-green-400">
                Start my approval
              </button>
              <p className="flex items-center text-white">
                <MdOutlineTimer /> 3min | No credit impact
              </p>
            </div>
            <img src={image} alt="" className=" h-[400px] md:h-[600px]" />
            <div className="absolute mt-[400px] border-none rounded-lg p-2 bg-green-950 sm:bg-none sm:mt-0  sm:ml-[900px]  sm:w-[200px]    ">
              <div className="flex gap-2  items-center justify-center text-xl  sm:text-2xl">
                <FcGoogle />
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                </div>
              </div>
              <p className="flex items-center text-white">
                <MdOutlineTimer /> 3min | No credit impact
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second div content */}

      <div className="mt-40 flex justify-around items-center">
        {/* image1 */}
        <div>
          <img src={clickedimage} alt="" className=" h-[400px] md:h-[600px]" />
          <div className="flex gap-5">
            {nameArr.map((item, id) => {
              return (
                <button
                  key={id}
                  onClick={() => renderImage(id)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider    hover:shadow-[0_0_0_4px_inset] h-12 px-6 py-3 w-auto"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-start items-start ">
          <div className="flex flex-col gap-y-24">
            <h1 className="font-semibold leading-0 sm:leading-[90px] m-0 p-0 w-auto tracking-tight md:tracking-tighter mb-lg text-xl   md:text-[100px] h-[100px]   ">
            Find out why <br /> we&apos;re better            </h1>
            <button className=" inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 hover:bg-[#017848] bg-[#004733] h-16 px-12 py-5 w-full md:w-fit text-white ">
              See all our stories
            </button>
          </div>
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <p> Trustpilot Excellent 4.4 out of 5</p>
          </div>
        </div>
      </div>

      {/* 3rd div content */}

      <HomePage3rd />
    </div>
  );
};

export default Home;
