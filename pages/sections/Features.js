import React from "react";
import Container from "components/Container";
import Image from "next/image";
import Subtitle from "components/Subtitle";
import tipoa from "public/images/tipo-a.png";
import tipoc from "public/images/tipo-c.png";
import bed from "public/icons/bed.svg";
import area from "public/icons/area.svg";
import shower from "public/icons/shower.svg";
import buildings from "public/icons/buildings.svg";
import { Fade } from "react-reveal";
import Section from "components/Section";

export default function Features() {
  return (
    <Section id="tipologia">
      <Container>
        <Subtitle>Tipologías</Subtitle>
        <div className="flex flex-col space-y-10 md:space-y-0 md:space-x-8 md:flex-row">
          <div className="flex-1">
            <div className="items-center w-full mb-4 border-b-4 border-success sm:flex">
              <div className="flex items-center self-stretch px-6 text-4xl font-bold text-white bg-success">
                A
              </div>
              <div className="flex-1">
                <div className="flex">
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
                      <Image alt="" width="32" height="32" src={buildings} />
                    </div>
                    <div>
                      <div className="text-sm">Pisos</div>
                      <strong className="text-lg">5°</strong>
                    </div>
                  </div>
                </div>
                <div className="flex">
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
              </div>
            </div>
            <Fade>
              <div className="relative h-[350px] lg:h-[500px] overflow-hidden">
                <Image
                  src={tipoa}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            </Fade>
          </div>
          <div className="flex-1">
            <div className="items-center w-full mb-4 border-b-4 border-info sm:flex">
              <div className="flex items-center self-stretch px-6 text-4xl font-bold text-white bg-info">
                C
              </div>
              <div className="flex-1">
                <div className="flex">
                  <div className="flex items-center flex-1 p-3 space-x-4 lg:p-4 text-blue-dark">
                    <div className="flex items-center justify-center flex-shrink-0 w-10">
                      <Image alt="" width="32" height="32" src={area} />
                    </div>
                    <div>
                      <div className="text-sm">Área total</div>
                      <strong className="text-lg">
                        71.74 m<sup>2</sup>
                      </strong>
                    </div>
                  </div>
                  <div className="flex items-center flex-1 p-3 space-x-4 lg:p-4 text-blue-dark">
                    <div className="flex items-center justify-center flex-shrink-0 w-10">
                      <Image alt="" width="32" height="32" src={buildings} />
                    </div>
                    <div>
                      <div className="text-sm">Pisos</div>
                      <strong className="text-lg">6°</strong>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center flex-1 p-3 space-x-4 lg:p-4 text-blue-dark">
                    <div className="flex items-center justify-center flex-shrink-0 w-10">
                      <Image alt="" width="42" height="42" src={bed} />
                    </div>
                    <div>
                      <div className="text-sm">Dormitorios</div>
                      <strong className="text-lg">2</strong>
                    </div>
                  </div>
                  <div className="flex items-center flex-1 p-3 space-x-4 lg:p-4 text-blue-dark">
                    <div className="flex items-center justify-center flex-shrink-0 w-10">
                      <Image alt="" width="32" height="32" src={shower} />
                    </div>
                    <div>
                      <div className="text-sm">Baños</div>
                      <strong className="text-lg">1</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Fade>
              <div className="relative h-[350px] lg:h-[500px] overflow-hidden">
                <Image
                  src={tipoc}
                  className="relative z-10"
                  alt="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
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
    </Section>
  );
}
