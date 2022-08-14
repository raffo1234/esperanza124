import React from "react";
import Container from "components/Container";
import Image from "next/image";
import Subtitle from "components/Subtitle";
import tv from "public/images/tv.jpeg";
import tv2 from "public/images/tv2.png";

export default function Gallery() {
  return (
    <div
      style={{
        background: "linear-gradient(128.51deg, #FFFFFF 32.94%, #EBF4FD 89.6%)",
      }}
      className="py-16"
    >
      <Container>
        <Subtitle>Galeria</Subtitle>
        <div className="space-y-5">
          <div className="items-center space-y-5 lg:space-y-0 lg:space-x-5 lg:flex">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden">
              <Image
                src={tv}
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
                src={tv}
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
                src={tv2}
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
                src={tv}
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
                src={tv}
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
