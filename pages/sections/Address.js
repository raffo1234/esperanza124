import React from "react";
import Image from "next/image";
import location from "public/icons/location.svg";
import arrowRight from "public/icons/arrow-right.svg";
import mapImage from "public/images/map.png";
import Container from "components/Container";
import Subtitle from "components/Subtitle";

export default function Address() {
  return (
    <section id="ubicacion" className="pt-40 pb-3 lg:pb-6">
      <Container>
        <Subtitle>Encuéntranos</Subtitle>
        <div className="p-3 bg-white rounded lg:p-6">
          <h3 className="flex items-center space-x-6">
            <div className="px-3 py-2 rounded bg-warning">
              <Image alt="" width="32" height="32" src={location} />
            </div>
            <p>Pasaje La Esperanza 124, Pio Pata, El Tambo, Huancayo</p>
          </h3>
          <div className="w-full h-1 my-2 lg:my-6 bg-warning"></div>
          <div className="relative">
            <Image
              alt="Esperanza 124"
              title="Esperanza 124"
              src={mapImage}
              quality={100}
            />
            <a
              href="https://goo.gl/maps/j5aTBkzth9z4buJZA"
              target="_blank"
              rel="noreferrer"
              className="absolute top-0 right-0 flex items-center text-xs lg:text-base bg-warning "
            >
              <div className="p-2 transition duration-300 group lg:p-6">
                <div className="flex items-center">
                  <div className="mr-3">Ver ubicación en Google Maps</div>
                  <Image alt="" width="20" height="20" src={arrowRight} />
                </div>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
