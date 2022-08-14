import React from "react";
import Image from "next/image";
import location from "public/icons/location.svg";
import mapImage from "public/images/map.png";
import Container from "components/Container";
import Subtitle from "components/Subtitle";

export default function Address() {
  return (
    <section
      id="ubicacion"
      className="py-20"
      style={{
        background: "linear-gradient(128.51deg, #dbd5ed 32.94%, #f3e7ea 89.6%)",
      }}
    >
      <Container>
        <Subtitle>Encuéntranos</Subtitle>
        <div className="p-3 bg-white rounded lg:p-6">
          <h3 className="flex items-center space-x-6">
            <div className="px-3 py-2 rounded bg-warning">
              <Image alt="" width="32" height="32" src={location} />
            </div>
            <p>Pasaje La Esperanza 124, Pio Pata, El Tambo</p>
          </h3>
          <div className="w-full h-px my-6 bg-warning"></div>
          <div className="relative">
            <Image alt="" src={mapImage} />
            <a
              href="https://goo.gl/maps/j5aTBkzth9z4buJZA"
              target="_blank"
              rel="noreferrer"
              className="absolute top-0 right-0 block p-6 bg-warning"
            >
              Ver ubicación en Google Maps
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
