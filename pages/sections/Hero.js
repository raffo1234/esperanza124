import React, { useState } from "react";
import Image from "next/image";
import location from "public/icons/location.svg";
import bed from "public/icons/bed.svg";
import area from "public/icons/area.svg";
import { Fade } from "react-reveal";
import { MdNightlight } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

export default function Hero() {
  const [isDay, setIsDay] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute z-10 right-4 top-1/2">
        <button
          onClick={() => setIsDay(true)}
          className={`${
            isDay ? "opacity-100" : "opacity-40"
          } hover:opacity-100 transition-opacity duration-500 ease-in-out h-12 w-12 flex items-center justify-center mb-3 bg-warning rounded-sm`}
        >
          <WiDaySunny size={32} />
        </button>
        <button
          onClick={() => setIsDay(false)}
          className={`
          ${!isDay ? "opacity-100" : "opacity-40"}
          hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center w-12 h-12 bg-black rounded-sm opacity-60 text-warning`}
        >
          <MdNightlight size={24} />
        </button>
      </div>
      <Fade>
        <div className={isDay ? "hidden" : "block"}>
          <video
            src="videos/intro-night.mov"
            width="100%"
            height="100%"
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
            className="hidden lg:block"
          />
          <video
            src="videos/intro-night_portrait.mp4"
            width="100%"
            height="100%"
            autoPlay={true}
            muted={true}
            loop={true}
            controls={false}
            className="block lg:hidden"
          />
        </div>
        <div className={isDay ? "block" : "hidden"}>
          <video
            src="videos/intro-day.mov"
            width="100%"
            height="100%"
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
            className="hidden lg:block"
          />
          <video
            src="videos/intro-day_portrait.mov"
            width="100%"
            height="100%"
            autoPlay={true}
            muted={true}
            loop={true}
            controls={false}
            className="block lg:hidden"
          />
        </div>
      </Fade>
      <div className="absolute z-20 px-20 py-10 -translate-y-1/2 bg-warning top-1/2 left-4">
        <p className="font-serif text-4xl text-right text-white lg:text-7xl lg:left-10">
          Entrega <br /> Inmediata
        </p>
      </div>
      <Fade>
        <div className="absolute bottom-0 left-0 right-0 z-20 flex-wrap items-center justify-center mx-auto sm:flex">
          <div className="flex items-center self-stretch px-5 py-4 space-x-4 lg:px-12 bg-warning text-blue-dark">
            <div className="flex-shrink-0 w-12">
              <Image alt="" width="48" height="48" src={bed} />
            </div>
            <div className="text-md">
              <span>3 Dormitorios</span>
              <div>2 baños</div>
            </div>
          </div>
          <div className="flex items-center self-stretch px-5 py-4 space-x-4 lg:px-12 bg-success text-blue-dark">
            <div className="flex-shrink-0 w-12">
              <Image alt="" width="40" height="40" src={area} />
            </div>
            <div className="text-md">
              <span>Desde</span>
              <div>
                74m<sup>2</sup>
              </div>
            </div>
          </div>
          <div className="flex items-center self-stretch px-5 py-4 space-x-4 lg:px-12 bg-info text-blue-dark">
            <div className="flex-shrink-0 w-12">
              <Image alt="" width="42" height="42" src={location} />
            </div>
            <div className="text-md">
              <span>Dirección</span>
              <div>
                Pje. La Esperanza 124, Urb. Pio Pata <br />
                El Tambo, Huancayo
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
