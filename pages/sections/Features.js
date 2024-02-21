import React from "react";
import Container from "components/Container";
import Image from "next/image";
import Subtitle from "components/Subtitle";
import tipoa from "public/images/tipo-a.png";
import tipob from "public/images/tipo-b.png";
import bed from "public/icons/bed.svg";
import area from "public/icons/area.svg";
import shower from "public/icons/shower.svg";
import { Fade } from "react-reveal";

export default function Features() {
  return (
    <section id="tipologia" className="pt-40 pb-3 lg:pb-6 ">
      <Container>
        <Subtitle>Tipología</Subtitle>
        <div className="items-start space-y-16 lg:space-y-0 lg:space-x-16 lg:flex">
          <div className="flex-1 ">
            <div className="items-center w-full mb-4 border-b-4 border-success sm:flex">
              <div className="flex items-center self-stretch px-10 text-4xl font-bold text-white bg-success">
                B
              </div>
              <div className="flex items-center flex-1 p-3 space-x-4 lg:p-4 text-blue-dark">
                <div className="flex items-center justify-center flex-shrink-0 w-10">
                  <Image alt="" width="32" height="32" src={area} />
                </div>
                <div>
                  <div className="text-sm">Área total</div>
                  <strong className="text-lg">
                    74.71 m<sup>2</sup>
                  </strong>
                </div>
              </div>
              <div className="flex items-center flex-1 p-3 space-x-4 lg:p-4 text-blue-dark">
                <div className="flex items-center justify-center flex-shrink-0 w-10">
                  <Image alt="" width="42" height="42" src={bed} />
                </div>
                <div>
                  <div className="text-sm">Dormitorios</div>
                  <strong className="text-lg">3</strong>
                </div>
              </div>
              <div className="flex items-center flex-1 p-3 space-x-4 lg:p-4 text-blue-dark">
                <div className="flex items-center justify-center flex-shrink-0 w-10">
                  <Image alt="" width="32" height="32" src={shower} />
                </div>
                <div>
                  <div className="text-sm">Baños</div>
                  <strong className="text-lg">2</strong>
                </div>
              </div>
            </div>
            <Fade>
              <div className="relative h-[350px] lg:h-[500px] overflow-hidden">
                <Image
                  src={tipoa}
                  className="relative z-10"
                  alt="Esperanza"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
}
