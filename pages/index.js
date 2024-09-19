import React from "react";
import Head from "next/head";
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import Features from "./sections/Features";
import Gallery from "./sections/Gallery";
import Address from "./sections/Address";
import Footer from "./sections/Footer";
import { NextSeo } from "next-seo";
import ScrollSpy from "react-ui-scrollspy";
import tipoc from "public/images/tipo-c.png";

const sections = [Hero, Features, Gallery, Address, Footer];

export default function Home() {
  return (
    <>
      <NextSeo
        title="Esperanza 124"
        description="Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata"
        canonical="https://esperanza124depas.com/"
        openGraph={{
          title: "Esperanza 124",
          description:
            "Esperanza 124, Departamentos en Venta en Huancayo El Tambo Pio Pata",
          url: "https://esperanza124depas.com/",
          images: [
            {
              url: "/static/front.jpg",
              width: 800,
              height: 600,
              alt: "Esperanza 124",
              type: "image/jpeg",
            },
            {
              url: "/static/kitchen.jpg",
              width: 800,
              height: 600,
              alt: "Kitchenet equipado",
              type: "image/jpeg",
            },
            {
              url: "/static/tipo-c.png",
              width: 800,
              height: 600,
              alt: "Departamento tipo C",
              type: "image/png",
            },
            {
              url: "/static/tipo-a.png",
              width: 800,
              height: 600,
              alt: "Departamento tipo A",
              type: "image/png",
            },
          ],
          site_name: "Esperanza 124",
        }}
      />
      <div className="text-sm lg:text-base">
        <Head>
          <title>Esperanza 124 Depas</title>
          <meta name="description" content="Esperanza 124" />
        </Head>
        <Header />
        <ScrollSpy activeClass="!max-w-full">
          {sections.map((SectionComponent, index) => (
            <SectionComponent key={index} />
          ))}
        </ScrollSpy>
      </div>
    </>
  );
}
