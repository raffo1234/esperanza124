import React from "react";

export default function Subtitle({ children }) {
  return (
    <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl lg:text-5xl brown">
      {children}
    </h2>
  );
}
