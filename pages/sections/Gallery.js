import React from "react";
import Container from "components/Container";
import Image from "next/image";
import Subtitle from "components/Subtitle";
import image2 from "public/images/image_02.jpeg";
import image3 from "public/images/image_03.jpeg";
import image4 from "public/images/image_04.jpeg";
import image5 from "public/images/image_05.jpeg";
import image6 from "public/images/image_06.jpeg";

export default function Gallery() {
  return (
    <div
      style={{
        background: "linear-gradient(128.51deg, #FFFFFF 32.94%, #EBF4FD 89.6%)",
      }}
      id="galeria"
      className="pt-20 pb-3 lg:pb-6"
    >
      <Container>
        <Subtitle>Galeria</Subtitle>
        <div className="space-y-5">
          <div className="flex items-center space-x-5">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden">
              <Image
                src={image2}
                className="relative z-10"
                alt="Esperanza"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="items-center space-y-5 lg:space-y-0 lg:space-x-5 lg:flex">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden">
              <Image
                src={image6}
                className="relative z-10"
                alt="Esperanza"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden">
              <Image
                src={image3}
                className="relative z-10"
                alt="Esperanza"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden">
              <Image
                src={image4}
                className="relative z-10"
                alt="Esperanza"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="items-center space-y-5 lg:space-y-0 lg:space-x-5 lg:flex">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden">
              <Image
                src={image2}
                className="relative z-10"
                alt="Esperanza"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden">
              <Image
                src={image5}
                className="relative z-10"
                alt="Esperanza"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
