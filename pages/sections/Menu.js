import React from "react";
import Image from "next/image";
import menu from "public/icons/menu.svg";

export default function Menu() {
  return (
    <div className="absolute top-0 left-0 z-20 w-16 h-full bg-white">
      <button className="w-full h-16 text-white bg-neutral-900">
        <Image src={menu} alt="" />
      </button>
    </div>
  );
}
