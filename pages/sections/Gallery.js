import { MdClose } from "react-icons/md";
import React, { useState, useEffect } from "react";
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

const useEscape = (onEscape) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onEscape();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onEscape]);
};

export default function Gallery() {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState(null);
  useEscape(() => setLightboxDisplay(false));

  return (
    <>
      <Section id="galeria">
        <Container>
          <Subtitle>Galeria</Subtitle>
          <div className="space-y-3">
            <Fade>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(image2);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
              </div>
            </Fade>
            <Fade>
              <div className="items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex">
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(image6);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(image3);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
              </div>
            </Fade>
            <Fade>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(image4);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
              </div>
            </Fade>
            <Fade>
              <div className="items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex">
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(image2);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(image5);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
              </div>
            </Fade>
            <Fade>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(image3);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
              </div>
            </Fade>
            <Fade>
              <div className="items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex">
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(kitchen);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(livingRoom);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
              </div>
            </Fade>
            <Fade>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(stairs);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
              </div>
            </Fade>
            <Fade>
              <div className="items-center space-y-3 lg:space-y-0 lg:space-x-3 lg:flex">
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(bathroom);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
                <button
                  onClick={() => {
                    setLightboxDisplay(true);
                    setImageToShow(bathroom2);
                  }}
                  className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-sm"
                >
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
                </button>
              </div>
            </Fade>
          </div>
        </Container>
      </Section>
      {lightboxDisplay ? (
        <section className="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-50 ">
          <Image
            src={imageToShow}
            className="relative z-10"
            alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
            title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <button
            className="absolute z-20 flex items-center justify-center w-12 h-12 transition-opacity duration-500 ease-in-out rounded-sm opacity-80 hover:opacity-100 top-4 right-4 bg-warning"
            onClick={() => setLightboxDisplay(false)}
          >
            <MdClose size={24} />
          </button>
        </section>
      ) : null}
    </>
  );
}
