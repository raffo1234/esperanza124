import React from "react";
import Container from "components/Container";
import Image from "next/image";
import Subtitle from "components/Subtitle";
import image2 from "public/images/5.jpg";
import image3 from "public/images/6.jpg";
import image4 from "public/images/image_04.jpeg";
import image5 from "public/images/image_05.jpeg";
import image6 from "public/images/image_06.jpeg";
import kitchen from "public/images/1.jpg";
import livingRoom from "public/images/2.jpg";
import bathroom from "public/images/3.jpg";
import bathroom2 from "public/images/4.jpg";
import stairs from "public/images/1.jpg";
import { Fade } from "react-reveal";
import Section from "components/Section";

export default function Gallery() {
  return (
    <Section id="galeria">
      <Container>
        <Subtitle>Galeria</Subtitle>
        <div className="space-y-3">
          <Fade>
            <div className="flex items-center space-x-3">
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={image2}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex">
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={image6}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={image3}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="flex items-center space-x-3">
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={image4}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex">
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={image2}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={image5}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="flex items-center space-x-3">
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={image3}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex">
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={kitchen}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={livingRoom}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="flex items-center space-x-3">
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={stairs}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex">
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={bathroom}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
              <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={bathroom2}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </Section>
  );
}
