import React from "react";

export default function Subtitle({ children }) {
  return (
    <h2 className="mb-8 font-serif text-3xl font-bold lg:text-4xl">
      {children}
    </h2>
  );
}
