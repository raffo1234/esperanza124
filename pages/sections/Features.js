import React from "react";
import Container from "components/Container";
import Image from "next/image";
import Subtitle from "components/Subtitle";
import tipoa from "public/images/tipo-a.png";
import tipob from "public/images/tipo-b.png";
import bed from "public/icons/bed.svg";
import measure from "public/icons/measure.svg";
import map from "public/icons/map.svg";

export default function Features() {
  return (
    <div id="tipologia" className="py-16 bg-beige">
      <Container>
        <Subtitle>Tipología</Subtitle>
        <div className="items-center space-y-16 lg:space-y-0 lg:space-x-16 lg:flex">
          <div className="flex-1">
            <div className="items-center w-full mb-2 sm:flex">
              <div className="p-3 text-4xl font-bold bg-success">A</div>
              <div className="flex items-center flex-1 p-3 space-x-4 lg:p-4 bg-neutral-200 text-blue-dark">
                <div className="flex-shrink-0">
                  <Image alt="" width="30" height="30" src={bed} />
                </div>
                <div>
                  <div className="text-sm">Área total</div>
                  <strong className="text-lg">
                    76 m<sup>2</sup>
                  </strong>
                </div>
              </div>
              <div className="flex items-center flex-1 p-3 space-x-6 lg:p-4 bg-neutral-200 text-blue-dark">
                <div className="flex-shrink-0">
                  <Image alt="" width="28" height="28" src={measure} />
                </div>
                <div>
                  <div className="text-sm">Dormitorios</div>
                  <strong className="text-lg">3</strong>
                </div>
              </div>
              <div className="flex items-center flex-1 p-3 space-x-6 lg:p-4 bg-neutral-200 text-blue-dark">
                <div className="flex-shrink-0">
                  <Image alt="" width="40" height="40" src={map} />
                </div>
                <div>
                  <div className="text-sm">Baños</div>
                  <strong className="text-lg">2</strong>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] lg:h-[500px] overflow-hidden">
              <Image
                src={tipoa}
                className="relative z-10"
                alt="Esperanza"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="items-center w-full mb-2 sm:flex">
              <div className="p-3 text-4xl font-bold bg-success">B</div>
              <div className="flex items-center flex-1 p-3 space-x-4 lg:p-4 bg-neutral-200 text-blue-dark">
                <div className="flex-shrink-0">
                  <Image alt="" width="30" height="30" src={bed} />
                </div>
                <div>
                  <div className="text-sm">Área total</div>
                  <strong className="text-lg">
                    76 m<sup>2</sup>
                  </strong>
                </div>
              </div>
              <div className="flex items-center flex-1 p-3 space-x-6 lg:p-4 bg-neutral-200 text-blue-dark">
                <div className="flex-shrink-0">
                  <Image alt="" width="28" height="28" src={measure} />
                </div>
                <div>
                  <div className="text-sm">Dormitorios</div>
                  <strong className="text-lg">3</strong>
                </div>
              </div>
              <div className="flex items-center flex-1 p-3 space-x-6 lg:p-4 bg-neutral-200 text-blue-dark">
                <div className="flex-shrink-0">
                  <Image alt="" width="40" height="40" src={map} />
                </div>
                <div>
                  <div className="text-sm">Baños</div>
                  <strong className="text-lg">2</strong>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] lg:h-[500px] overflow-hidden">
              <Image
                src={tipob}
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
