import React from "react";

export default function Section({ id, children }) {
  return (
    <section id={id} className="pt-10 lg:pt-24">
      {children}
    </section>
  );
}
