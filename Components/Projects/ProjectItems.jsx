import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProjectItems = ({ img, title, subTitle, referTo }) => {
  return (
    <div className="rounded-xl p-2 shadow-lg shadow-gray-400 duration-300 hover:scale-105 relative flex items-center justify-center   group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
      <Image
        src={img}
        alt="projects/img"
        width={400}
        height={200}
        className="w-full rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <h4 className="pb-4 pt-2 text-white text-center">{subTitle}</h4>
        <Link href={referTo} className=" underline text-white">
          <p className="text-2xl text-white tracking-wider text-center font-bold ">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
