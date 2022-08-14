import React from "react";
import Head from "next/head";
import First from "./sections/First";
import Header from "./sections/Header";
import Features from "./sections/Features";
import Gallery from "./sections/Gallery";
import Address from "./sections/Address";
import Footer from "./sections/Footer";

const sections = [First, Features, Gallery, Address, Footer];

export default function Home() {
  return (
    <div className="text-xs bg-capri lg:text-base">
      <Head>
        <title>Esperanza 124</title>
        <meta name="description" content="Esperanza 124" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}
