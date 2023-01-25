import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSideBar } from "../Redux/SideBarSlice";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../Utilites/Logo";
import List from "../Utilites/List";
import Title from "../Utilites/Title";
import Icons from "../Utilites/Icons";
import { useRouter } from "next/router";
const NavBar = () => {
  const [linksColor, setLinksColor] = useState("#1f2937");
  const [navBg, setNavBg] = useState("#ecf0f3");
  const router = useRouter();
  useEffect(() => {
    if (
      router.asPath === "/burger" ||
      router.asPath === "/brands" ||
      router.asPath === "/trips"
    ) {
      setNavBg("transparent");
      setLinksColor("white");
    } else {
      setNavBg("#ecf0f3");
      setLinksColor("#black");
    }
  }, [router]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SideBarSlice.sideBarState);
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    document.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={`${
        shadow
          ? "fixed top-0 left-0 w-full z-[100] blur-effect-theme"
          : "fixed top-0 left-0 w-full z-[100]"
      }`}
    >
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="flex justify-between items-center">
          {/*logo*/}
          <Logo />
          {/* nav links*/}
          <div className="hidden md:flex h-14  items-center">
            <List
              styles={`flex items-center gap-8 text-${linksColor}`}
              linkStyles="text-sm uppercase"
              closeSideBar={false}
            />
          </div>
          <div className="md:hidden">
            <AiOutlineMenu
              size={40}
              className={`cursor-pointer text-${linksColor}`}
              onClick={() => dispatch(handleSideBar(true))}
            />
          </div>
          {/*mobile viewo*/}
        </div>
        <div className="relative md:hidden">
          {/*overlay*/}
          <div
            className={`${
              state ? "fixed top-0 left-0 w-full h-screen bg-black/70" : ""
            }`}
          >
            {/*side bar*/}
            <div
              className={`${
                state
                  ? "p-4 fixed top-0 left-0 w-[80%] h-screen bg-white duration-500"
                  : "p-4 fixed top-0 left-[-200%] duration-500"
              }`}
            >
              {/*logo and close icons*/}
              <div className="flex items-center justify-between mb-4 sm:mb-10">
                {/*logo*/}
                <Logo />
                {/*close icons*/}
                <div className=" cursor-pointer rounded-full p-3 flex justify-center items-center shadow-lg shadow-gray-400">
                  <AiOutlineClose
                    size={25}
                    onClick={() => dispatch(handleSideBar(false))}
                  />
                </div>
              </div>
              <Title
                style="text-sm pb-6 border-b mb-2 sm:mb-6 uppercase text-gray-600"
                title="let's build something legandry together"
              />
              <List
                linkStyles="text-sm uppercase  py-4 border-b mb-4 sm:mb-8"
                closeSideBar={true}
              />
              <Title
                title="let's connect"
                style="uppercase text-[#5651e5] tracking-widest"
              />
              <Icons styles="flex  w-full items-center mt-4 justify-center gap-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
