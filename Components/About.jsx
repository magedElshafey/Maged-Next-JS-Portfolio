import React from "react";
import SubTitle from "./Utilites/SubTitle";
import Title from "./Utilites/Title";
import Link from "next/link";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="max-w-[1640px] mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className=" w-2/3 mx-auto">
          <Title
            title="about"
            style="text-blue-600 uppercase tracking-widest text-2xl"
          />
          <SubTitle title="who I Am" />
          <p className="py-2 text-gray-600 w-full ">
            I Specialize In Building Mobile Responsive Front-End UI Applications
            That Connect With API’s And Other Backend Technologies. I’m
            Passionate About Learning New Technologies And Understand There Is
            More Than One Way To Accomplish A Task. Though I Am Most Proficient
            In Building Front-End Applications Using HTML, CSS, Javascript, And
            React, I Am A Quick Learner And Can Pick Up New Tech Stacks As
            Needed. I Believe That Being A Great Developer Is Not Using One
            Specific Language, But Choosing The Best Tool For The Job.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div>
          <Image
            width={400}
            height={100}
            alt="about/image"
            src="/../public/assets/about.jpg"
            className="w-96 h-auto object-cover rounded-xl duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
