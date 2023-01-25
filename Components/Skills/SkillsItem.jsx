import React from "react";
import Image from "next/image";
const SkillsItem = ({ endPoint }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {endPoint.map((item, index) => {
        return (
          <div
            key={index}
            className="shadow-lg rounded-lg shadow-gray-400 duration-300 hover:scale-105 flex justify-between items-center p-6"
          >
            <Image width={100} height={40} src={item.img} alt="/" />
            <p className="font-bold text-xl">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsItem;
