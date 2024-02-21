import React from "react";
import Image from "next/image";
import location from "public/icons/location.svg";
import bed from "public/icons/bed.svg";
import area from "public/icons/area.svg";
import { Fade } from "react-reveal";

export default function Hero() {
  return (
    <div>
      <div className="relative w-full h-screen p-10 overflow-hidden">
        <div>
          <Fade>
            <video
              src="videos/intro.mov"
              width="100%"
              height="100%"
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
              className="hidden lg:block"
            />
            <video
              src="videos/intro_portrait.mp4"
              width="100%"
              height="100%"
              autoPlay={true}
              muted={true}
              loop={true}
              controls={false}
              className="block lg:hidden"
            />
          </Fade>
        </div>
        <div className="absolute z-20 px-20 py-10 -translate-y-1/2 bg-warning top-1/2 left-4">
          <p className="font-serif text-4xl text-right lg:text-7xl lg:left-10">
            Entrega <br /> Inmediata
          </p>
        </div>
        <Fade>
          <div className="absolute bottom-0 left-0 right-0 z-20 flex-wrap items-center justify-center mx-auto sm:flex">
            <div className="flex items-center self-stretch px-5 py-4 space-x-4 lg:px-12 bg-warning text-blue-dark">
              <div className="flex-shrink-0 w-12">
                <Image alt="" width="48" height="48" src={bed} />
              </div>
              <div className="text-lg">
                <span>3 Dormitorios</span>
                <div>2 baños</div>
              </div>
            </div>
            <div className="flex items-center self-stretch px-5 py-4 space-x-4 lg:px-12 bg-success text-blue-dark">
              <div className="flex-shrink-0 w-12">
                <Image alt="" width="40" height="40" src={area} />
              </div>
              <div className="text-lg">
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
              <div className="text-lg">
                <span>Dirección</span>
                <div>
                  Pje. La Esperanza 124, Pio Pata <br />
                  El Tambo, Huancayo
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
