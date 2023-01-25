import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div>
      <Image
        src="/../public/assets/logo.png"
        alt="logo/img"
        width={200}
        height={50}
        className=" w-24 h-14 object-cover"
      />
    </div>
  );
};

export default Logo;
