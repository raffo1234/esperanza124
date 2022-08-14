import React from "react";

export default function Gallery({ isActive, currentSection }) {
  return (
    <div
      style={{
        background: "linear-gradient(128.51deg, #FFFFFF 32.94%, #EBF4FD 89.6%)",
      }}
    >
      Three section
      {currentSection}
    </div>
  );
}
