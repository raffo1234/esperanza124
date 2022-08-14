import React from "react";
import Image from "next/image";
import home from "public/images/home.jpeg";

export default function First() {
  return (
    <div
      style={{
        background: "linear-gradient(128.51deg, #fdfcfb 32.94%, #e9fefb 89.6%)",
      }}
      className="relative w-full h-screen overflow-hidden"
    >
      <Image
        src={home}
        alt="Esperanza"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
    </div>
  );
}
