import React from "react";
import { icons } from "../../Data/data.js";
const Icons = ({ styles }) => {
  return (
    <div className={styles}>
      {icons.map((Icon, index) => {
        return (
          <div
            className="rounded-full shadow-lg shadow-gray-400 p-3 flex items-center justify-center duration-300 hover:scale-105"
            key={index}
          >
            <a href={Icon.text} target="_blank">
              <Icon.icon />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
