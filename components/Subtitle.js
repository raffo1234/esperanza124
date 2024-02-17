import React from "react";

export default function Subtitle({ children }) {
  return (
    <h2 className="mb-8 text-4xl font-bold uppercase font-bebas lg:text-8xl text-cream">
      {children}
    </h2>
  );
}
