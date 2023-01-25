import React, { useRef, useEffect } from "react";
import Title from "../Utilites/Title";
import SubTitle from "../Utilites/SubTitle";
import { skills } from "../../Data/data";
import SkillsItem from "./SkillsItem";
const Skills = () => {
  const el = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= el.current.offsetTop - 490) {
        el.current.classList.remove("notScroll");
        el.current.classList.add("isScrolling");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="skills" className="max-w-[1640px] mx-auto p-4 py-20">
      <Title
        title="skills"
        style="text-blue-600 uppercase tracking-widest text-2xl"
      />
      <SubTitle title="what can i do" />
      <div ref={el} className="notScroll">
        <SkillsItem endPoint={skills} />
      </div>
    </div>
  );
};

export default Skills;
