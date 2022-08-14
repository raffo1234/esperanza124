import React from "react";
import Image from "next/image";
import whatsapp from "public/icons/whatsapp.svg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white">
      <div className="flex justify-between w-full max-w-screen-xl px-6 py-4 mx-auto">
        <h1>
          <a href="./" title="Esperanza">
            <span className="font-serif text-4xl font-bold text-success">
              Esperanza
            </span>
            <span className="font-sans text-black">124</span>
          </a>
        </h1>
        <nav>
          <ul className="flex items-center">
            <li>
              <a href="#caracteristicas" className="p-4">
                Características
              </a>
            </li>
            <li>
              <a href="#galeria" className="p-4">
                Galeria
              </a>
            </li>
            <li>
              <a href="#ubicacion" className="p-4">
                Ubicación
              </a>
            </li>
            <li className="ml-6">
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
    </header>
  );
}
