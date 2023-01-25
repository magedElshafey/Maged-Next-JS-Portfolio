import React, { useRef, useEffect } from "react";
import Title from "../Components/Utilites/Title";
import Typed from "typed.js";
import Image from "next/image";
import Icons from "./Utilites/Icons";
import Resume from "./Resume";
const Hero = () => {
  const el = useRef();
  const options = {
    strings: ["a front-end web developer"], // Strings to display
    // Speed settings, try diffrent values untill you get good results
    startDelay: 300,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
  };
  useEffect(() => {
    const typed = new Typed(el.current, options);

    // Destropying to clean up process
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      id="home"
      className="flex w-full h-screen justify-center items-center my-14 sm:my-0"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
        <div>
          <Title
            style="text-sm  mb-2 sm:mb-6 uppercase text-gray-600 text-center"
            title="let's build something legandry together"
          />
          <h1 className="text-3xl md:text-4xl lg:text-6xl mb-2 text-center">
            hi i'm <span className=" text-blue-600">maged</span>
          </h1>
          <h1 ref={el} className="text-3xl md:text-4xl lg:text-6xl mb-2"></h1>
          <Icons styles="flex  w-full items-center mt-4 justify-center gap-3 text-blue-600" />
          <Resume />
        </div>
        <div>
          <Image
            width={400}
            height={40}
            alt="megz/image"
            src="/../public/assets/megz.jpeg"
            className=" w-80 h-80 rounded-[50%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
