import React from "react";
import Image from "next/image";
import home from "public/images/home.jpeg";
import location from "public/icons/location.svg";
import bed from "public/icons/bed.svg";
import area from "public/icons/area.svg";

export default function Hero() {
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
      <p className="absolute z-20 font-serif text-4xl font-bold text-right text-white -translate-y-1/2 lg:text-8xl right-4 lg:right-10 top-1/2">
        Entrega <br /> Inmediata
      </p>
      <div className="absolute bottom-0 left-0 right-0 z-20 flex-wrap items-center justify-center mx-auto sm:flex">
        <div className="flex items-center self-stretch p-3 space-x-4 lg:p-6 bg-warning text-blue-dark">
          <div className="flex-shrink-0 w-12">
            <Image alt="" width="48" height="48" src={bed} />
          </div>
          <div>
            <span>3 Dormitorios</span>
            <div>2 baños</div>
          </div>
        </div>
        <div className="flex items-center self-stretch p-3 space-x-4 lg:p-6 bg-success text-blue-dark">
          <div className="flex-shrink-0 w-12">
            <Image alt="" width="40" height="40" src={area} />
          </div>
          <div>
            <span>Desde</span>
            <div>
              76m<sup>2</sup>
            </div>
          </div>
        </div>
        <div className="flex items-center self-stretch p-3 space-x-4 lg:p-6 bg-info text-blue-dark">
          <div className="flex-shrink-0 w-12">
            <Image alt="" width="42" height="42" src={location} />
          </div>
          <div>
            <span>Dirección</span>
            <div>Pje. La Esperanza 124, El Tambo</div>
          </div>
        </div>
      </div>
    </div>
  );
}
