import React from "react";
import Image from "next/image";
import home from "public/images/home.jpeg";
import map from "public/icons/map.svg";
import bed from "public/icons/bed.svg";
import measure from "public/icons/measure.svg";

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
        className="relative z-10"
        alt="Esperanza"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-wrap items-center justify-center mx-auto">
        <div className="flex p-6 space-x-4 bg-warning text-blue-dark">
          <Image alt="" width="48" height="48" src={bed} />
          <div>
            <span>3 Dormitorios</span>
            <div>2 baños</div>
          </div>
        </div>
        <div className="flex p-6 space-x-6 bg-success text-blue-dark">
          <Image alt="" width="48" height="48" src={measure} />
          <div>
            <span>Desde</span>
            <div>
              76m<sup>2</sup>
            </div>
          </div>
        </div>
        <div className="flex p-6 space-x-6 bg-info text-blue-dark">
          <Image alt="" width="48" height="48" src={map} />
          <div>
            <span>Dirección</span>
            <div>Pje. La Esperanza 124, El Tambo</div>
          </div>
        </div>
      </div>
    </div>
  );
}
