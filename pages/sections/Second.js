import React from "react";

export default function Second({ isActive, currentSection }) {
  return (
    <div
      className="p-16"
      style={{
        background: "linear-gradient(128.51deg, #dbd5ed 32.94%, #f3e7ea 89.6%)",
      }}
    >
      Second section
      {currentSection}
    </div>
  );
}
