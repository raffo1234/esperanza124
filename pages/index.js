import React from "react";
import Head from "next/head";
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import Features from "./sections/Features";
import Gallery from "./sections/Gallery";
import Address from "./sections/Address";
import Footer from "./sections/Footer";

const sections = [Hero, Features, Gallery, Address, Footer];

export default function Home() {
  return (
    <div className="text-sm bg-capri lg:text-base">
      <Head>
        <title>Esperanza 124</title>
        <meta name="description" content="Proyecto | Esperanza 124" />
      </Head>
      <Header />
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}
