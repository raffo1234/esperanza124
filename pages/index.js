import React from "react";
import Head from "next/head";
import First from "./sections/First";
import Header from "./sections/Header";
import Second from "./sections/Second";
import Three from "./sections/Three";
import Menu from "./sections/Menu";

const sections = [First, Second, Three];

export default function Home() {
  return (
    <div className="bg-capri">
      <Head>
        <title>Esperanza</title>
        <meta name="description" content="Esperanza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
      <Header />
    </div>
  );
}
