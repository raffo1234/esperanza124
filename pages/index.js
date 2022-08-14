import React from "react";
import Head from "next/head";
import First from "./sections/First";
import Header from "./sections/Header";
import Address from "./sections/Address";
import Gallery from "./sections/Gallery";

const sections = [First, Address, Gallery];

export default function Home() {
  return (
    <div className="bg-capri">
      <Head>
        <title>Esperanza</title>
        <meta name="description" content="Esperanza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}
