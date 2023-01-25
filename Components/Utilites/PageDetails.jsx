import React from "react";
import Image from "next/image";
import Head from "next/head";
import Title from "./Title";
import SubTitle from "./SubTitle";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const PageDetails = ({
  img,
  title,
  techHeader,
  overView,
  demo,
  code,
  AllTech,
  headTitle,
}) => {
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={img}
            alt="/"
          />
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 flex items-center justify-center text-white">
            <div>
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4">
                {title}
              </h4>
              <p className="text-md sm:text-lg md:text-xl lg:text-2xl">
                {techHeader}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1640px] mx-auto p-4">
        <Title
          title="project"
          style="text-blue-600 uppercase tracking-widest text-2xl"
        />
        <SubTitle title="overview" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-6">
          <div>
            <p className="text-gray-600">{overView}</p>
            <div className="flex items-center gap-2 my-6">
              <button className="p-3 w-24">
                <a href={demo} target="_blank">
                  demo
                </a>
              </button>
              <button className="p-3 w-24">
                <a href={code} target="_blank">
                  code
                </a>
              </button>
            </div>
          </div>
          <div className="p-2 rounded-xl shadow-lg shadow-gray-400 w-1/2 text-center">
            <h4 className="mb-3">Technologies</h4>
            {AllTech.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center  gap-2 py-4 text-center"
                >
                  <RiRadioButtonFill size={15} />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="text-gray-600 underline text-xl md:text-2xl lg:text-4xl py-8"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
