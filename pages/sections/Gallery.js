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

const usePrev = (onPrev) => {
  useEffect(() => {
    const handlePrev = (event) => {
      if (event.keyCode === 37) onPrev();
    };
    window.addEventListener("keydown", handlePrev);

    return () => {
      window.removeEventListener("keydown", handlePrev);
    };
  }, [onPrev]);
};

const useNext = (onNext) => {
  useEffect(() => {
    const handleNext = (event) => {
      if (event.keyCode === 39) onNext();
    };
    window.addEventListener("keydown", handleNext);

    return () => {
      window.removeEventListener("keydown", handleNext);
    };
  }, [onNext]);
};

export default function Gallery() {
  const images = [
    image2,
    image6,
    image3,
    image4,
    image5,
    kitchen,
    livingRoom,
    bathroom,
    bathroom2,
  ];

  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState(0);
  let currentIndex = images.indexOf(imageToShow);

  const showPrev = () => {
    if (currentIndex <= 0) {
      setImageToShow(images[images.length - 1]);
    } else {
      let prevImage = images[currentIndex - 1];
      setImageToShow(prevImage);
    }
  };

  const showNext = () => {
    if (currentIndex >= images.length - 1) {
      setImageToShow(images[0]);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  useEscape(() => setLightboxDisplay(false));
  usePrev(() => showPrev());
  useNext(() => showNext());

  return (
    <>
      <Section id="galeria">
        <Container>
          <Subtitle>Galeria</Subtitle>
          <div className="space-y-3">
            {images.map((image, index) => {
              return (
                <Fade key={index}>
                  <button
                    onClick={() => {
                      setLightboxDisplay(true);
                      setImageToShow(image);
                    }}
                    className="relative block w-full h-[350px] lg:h-[500px] focus:outline-none focus:ring rounded-sm"
                  >
                    <Image
                      src={image}
                      className="transition duration-300 ease-in-out rounded-sm hover:scale-105"
                      alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                      title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      quality={100}
                    />
                  </button>
                </Fade>
              );
            })}
          </div>
        </Container>
      </Section>
      {lightboxDisplay ? (
        <section className="fixed top-0 left-0 z-40 w-full h-full bg-white">
          <Image
            src={imageToShow}
            className="relative z-10 animate-scale"
            alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
            title="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute z-20 flex space-x-3 -translate-x-1/2 left-1/2 bottom-6">
            {images.map((_, index) => (
              <button
                onClick={() => setImageToShow(images[index])}
                key={index}
                className={`flex items-center transition hover:bg-opacity-100 duration-500 ease-in-out justify-center w-6 h-6 rounded-full ${
                  index === currentIndex
                    ? "bg-warning"
                    : "bg-white bg-opacity-40"
                } `}
              ></button>
            ))}
          </div>
          <div className="absolute z-20 flex items-center top-4 right-4">
            <div className="flex items-center h-12 px-4 mr-4 bg-white bg-opacity-20">
              {currentIndex + 1}/{images.length}
            </div>
            <button
              className="flex items-center justify-center w-12 h-12 transition-opacity duration-500 ease-in-out rounded-sm opacity-80 hover:opacity-100 bg-warning"
              onClick={() => setLightboxDisplay(false)}
            >
              <MdClose size={24} />
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
