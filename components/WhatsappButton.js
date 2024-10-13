import React from "react";
import Image from "next/image";
import whatsapp from "public/icons/whatsapp.svg";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/51988226088/?text=Quiero%20reservar%20una%20cita.%20%0AProyecto%20Esperanza%20124%2C%20El%20Tambo%20Huancayo"
      className="flex items-center justify-center p-2 rounded bg-whatsapp-500 hover:bg-whatsapp-800 focus:outline-none focus:ring"
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
  );
}
