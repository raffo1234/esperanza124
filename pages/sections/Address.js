import React from "react";
import Image from "next/image";
import mapIcon from "public/icons/map.svg";
import mapImage from "public/images/map.png";

export default function Address() {
  return (
    <section
      id="ubicacion"
      className="py-16"
      style={{
        background: "linear-gradient(128.51deg, #dbd5ed 32.94%, #f3e7ea 89.6%)",
      }}
    >
      <div className="w-full max-w-screen-xl px-6 py-4 mx-auto">
        <h1 className="mb-10 font-serif text-4xl font-bold">Ubicación</h1>
        <div className="p-6 bg-white">
          <h3 className="flex items-center space-x-6">
            <Image alt="" width="48" height="48" src={mapIcon} />
            <p className="text-lg">
              Pasaje La Esperanza 124, Pio Pata, El Tambo
            </p>
          </h3>
          <div className="w-full h-px my-6 bg-neutral-100"></div>
          <Image alt="" src={mapImage} />
        </div>
      </div>
    </section>
  );
}
