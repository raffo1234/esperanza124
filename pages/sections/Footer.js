import React from "react";
import Container from "components/Container";

export default function Footer() {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer className="py-8">
      <Container>
        <p className="text-xs text-right">
          © {currentYear} Esperanza124. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
