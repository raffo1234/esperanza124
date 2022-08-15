import React from "react";
import Image from "next/image";
import whatsapp from "public/icons/whatsapp.svg";
import Container from "components/Container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-2xl">
      <Container>
        <div className="flex items-center justify-between py-4">
          <h1>
            <a href="./" title="Esperanza 124">
              <span className="text-2xl font-bold lg:text-3xl">Esperanza</span>{" "}
              <span className="text-success">124</span>
            </a>
          </h1>
          <nav>
            <ul className="flex items-center">
              <li>
                <a href="#tipologia" className="p-1 lg:p-4">
                  Tipología
                </a>
              </li>
              <li>
                <a href="#galeria" className="p-1 lg:p-4">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="p-1 lg:p-4">
                  Ubicación
                </a>
              </li>
              <li className="flex-shrink-0 ml-6">
                <a
                  href="https://wa.me/51997258592"
                  className="flex items-center justify-center p-2 rounded bg-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image alt="" width="24" height="24" src={whatsapp} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
