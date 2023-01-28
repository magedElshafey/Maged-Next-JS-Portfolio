import React, { useEffect, useRef } from "react";
import Title from "../Utilites/Title";
import SubTitle from "../Utilites/SubTitle";
import ProjectItems from "./ProjectItems";
import buerger from "../../public/assets/projects/doom.png";
import brandsClub from "../../public/assets/projects/brandsclub.png";
import trips from "../../public/assets/projects/trips.png";
const Projects = () => {
  const el = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= el.current.offsetTop - 400) {
        el.current.classList.remove("notScrollProject");
        el.current.classList.add("scrollProject");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id='projects'
      className='py-12 max-w-[1640px] mx-auto p-4'
    >
      <Title
        title='projects'
        style='text-blue-600 uppercase tracking-widest text-2xl'
      />
      <SubTitle title="what i've built" />
      <div
        ref={el}
        className='notScrollProject grid grid-cols-1 md:grid-cols-3 gap-8'
      >
        <ProjectItems
          img={buerger}
          title='Doom'
          subTitle='Landing Page'
          referTo='/burger'
        />
        <ProjectItems
          img={brandsClub}
          title='Brands Club'
          subTitle='E-commerce'
          referTo='/brands'
        />
        <ProjectItems
          img={trips}
          title='Beaches '
          subTitle='Landing Page'
          referTo='/trips'
        />
      </div>
    </div>
  );
};

export default Projects;
