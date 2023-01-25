import React from "react";
import Image from "next/image";
import Title from "../Utilites/Title";
import Icons from "../Utilites/Icons";
const ContactInfo = () => {
  return (
    <div className="p-4 rounded-xl shadow-lg shadow-gray-400 h-auto">
      <Image
        src="/../public/assets/contact.jpg"
        alt="contact/img"
        width={400}
        height={50}
        className="rounded-xl duration-300 hover:scale-105"
      />
      <h2 className="my-8 text-3xl md:text-5xl lg:text-6xl">Maged Elshafey</h2>
      <p className="mb-6 text-gray-600">front-end developer</p>
      <p className="text-gray-600 mt-6 mb-2">
        i am available for freelance or full time positions.
      </p>
      <p className="text-gray-600 mb-12">contact me and let's talk</p>
      <Title title="contact with me" />
      <Icons styles="flex  w-full items-center mt-4  gap-3" />
    </div>
  );
};

export default ContactInfo;
