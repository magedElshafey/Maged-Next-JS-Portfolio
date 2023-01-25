import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { handleSideBar } from "../Redux/SideBarSlice.js";
const List = ({ styles, linkStyles, closeSideBar }) => {
  const dispatch = useDispatch();
  const handleCloseSideBar = () => {
    if (closeSideBar) {
      dispatch(handleSideBar(false));
    } else {
      return false;
    }
  };
  return (
    <ul className={styles}>
      <Link href="/" onClick={handleCloseSideBar}>
        <li className={linkStyles}>home</li>
      </Link>
      <Link href="/#about" onClick={handleCloseSideBar}>
        <li className={linkStyles}>about</li>
      </Link>
      <Link href="/#skills" onClick={handleCloseSideBar}>
        <li className={linkStyles}>skills</li>
      </Link>
      <Link href="/#projects" onClick={handleCloseSideBar}>
        <li className={linkStyles}>projects</li>
      </Link>
      <Link href="/#contact" onClick={handleCloseSideBar}>
        <li className={linkStyles}>contact</li>
      </Link>
    </ul>
  );
};

export default List;
