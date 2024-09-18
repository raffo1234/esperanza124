import React from "react";
import Image from "next/image";
import location from "public/icons/location.svg";
import arrowRight from "public/icons/arrow-right.svg";
import mapImage from "public/images/map.png";
import Container from "components/Container";
import Subtitle from "components/Subtitle";
import Section from "components/Section";
import { Fade } from "react-reveal";
import whatsapp from "public/icons/whatsapp.svg";

export default function Address() {
  return (
    <Section id="ubicacion">
      <Container>
        <div className="flex">
          <Subtitle>Agenda una visita</Subtitle>
          <a
            href="https://wa.me/51988226088/?text=Quiero%20reservar%20una%20cita.%20%0AProyecto%20Esperanza%20124%2C%20El%20Tambo%20Huancayo"
            className="flex items-center self-start justify-center p-2 ml-8 rounded bg-whatsapp"
            target="_blank"
            rel="noreferrer"
            alt="51988226088 - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
          >
            <Image
              alt="51988226088 - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
              width="24"
              height="24"
              src={whatsapp}
              title="51988226088 - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
            />
          </a>
        </div>
        <div className="p-3 bg-white rounded lg:p-6">
          <h3 className="flex items-center space-x-6">
            <div className="px-3 py-2 rounded bg-warning">
              <Image alt="" width="32" height="32" src={location} />
            </div>
            <p>
              Dirección: Pasaje La Esperanza 124, Urbanización Pio Pata, El
              Tambo, Huancayo <br />
              <span className="text-sm">
                Referencia: A una cuadra del Colegio de Enfermeros
              </span>
            </p>
          </h3>
          <div className="w-full h-1 my-2 lg:my-6 bg-warning"></div>
          <Fade>
            <div className="relative">
              <Image
                alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
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
          </Fade>
        </div>
      </Container>
    </Section>
  );
}
