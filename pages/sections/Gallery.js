import React from "react";
import Container from "components/Container";
import Image from "next/image";
import Subtitle from "components/Subtitle";
import image2 from "public/images/5.jpg";
import image3 from "public/images/6.jpg";
import image4 from "public/images/image_04.jpeg";
import image5 from "public/images/image_05.jpeg";
import image6 from "public/images/image_06.jpeg";
import recepcion from "public/images/recepcion.jpeg";
import kitchen from "public/images/1.jpg";
import livingRoom from "public/images/2.jpg";
import bathroom from "public/images/3.jpg";
import bathroom2 from "public/images/4.jpg";
import front from "public/images/front.jpeg";
import stairs from "public/images/1.jpg";

export default function Gallery() {
  return (
    <div id="galeria" className="pt-40 pb-3 lg:pb-6">
      <Container>
        <Subtitle>Galeria</Subtitle>
        <div className="space-y-5">
          <div className="flex items-center space-x-5">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={image2}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="items-center space-y-5 lg:space-y-0 lg:space-x-5 lg:flex">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={image6}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={image3}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={image4}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="items-center space-y-5 lg:space-y-0 lg:space-x-5 lg:flex">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={image2}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={image5}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={recepcion}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="items-center space-y-5 lg:space-y-0 lg:space-x-5 lg:flex">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={kitchen}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={livingRoom}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={front}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="items-center space-y-5 lg:space-y-0 lg:space-x-5 lg:flex">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={bathroom}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={bathroom2}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="relative flex-1 h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={stairs}
                className="relative z-10"
                alt="Esperanza"
                title="Esperanza 124"
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
