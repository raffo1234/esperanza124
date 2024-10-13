import React, { useState, useEffect } from "react";
import Image from "next/image";
import whatsapp from "public/icons/whatsapp.svg";
import Container from "components/Container";
import { FaDownload } from "react-icons/fa";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-beige">
      <Container>
        <nav
          className={`flex items-center justify-between w-full transition-[padding] transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); py-${
            scrollPosition > 50 ? "4" : "8"
          }`}
        >
          <ul className="flex items-center">
            <li className="hidden sm:block">
              <a
                href="#tipologia"
                className="block p-3 font-bold transition duration-300 lg:p-4 group"
                alt="Tipología - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                title="Tipología - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
              >
                Tipología
                <span
                  data-to-scrollspy-id="tipologia"
                  className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-warning"
                ></span>
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                href="#galeria"
                className="block p-3 font-bold transition duration-300 lg:p-4 group"
                alt="Galeria - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                title="Galeria - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
              >
                Galeria
                <span
                  data-to-scrollspy-id="galeria"
                  className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-warning"
                ></span>
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                href="#ubicacion"
                className="block p-3 font-bold transition duration-300 lg:p-4 group"
                title="Ubicación - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                alt="Ubicación - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
              >
                Ubicación
                <span
                  data-to-scrollspy-id="ubicacion"
                  className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-warning"
                ></span>
              </a>
            </li>
          </ul>
          <h1>
            <a
              href="./"
              title="51988226088 - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
              alt="51988226088 - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
            >
              <span className="font-serif text-2xl font-bold lg:text-4xl">
                Esperanza
              </span>{" "}
              <span className="text-success">124</span>
            </a>
          </h1>
          <ul className="flex items-center gap-4">
            <li className="flex-shrink-0">
              <a
                href="https://wa.me/51988226088/?text=Quiero%20reservar%20una%20cita.%20%0AProyecto%20Esperanza%20124%2C%20El%20Tambo%20Huancayo"
                className="flex items-center justify-center p-2 rounded bg-whatsapp "
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
            </li>
            <li className="flex-shrink-0">
              <a
                download
                alt="Brochure Virtual - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                title="Brochure Virtual - Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                href="/pdfs/esperanza124.pdf"
                className="flex items-center justify-center px-4 py-2 space-x-2 text-white rounded bg-info"
                target="_blank"
                rel="noreferrer"
              >
                <FaDownload />
                <span>Brochure</span>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
