import React from "react";

export default function Container({ children }) {
  return (
    <div className="w-full max-w-screen-xl px-3 mx-auto lg:px-6">
      {children}
    </div>
  );
}
