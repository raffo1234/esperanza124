import { Html, Head, Main, NextScript } from "next/document";

const links = [
  {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
  },
];

export default function Document() {
  return (
    <Html style={{ scrollBehavior: "smooth", scrollPaddingTop: 90 }}>
      <Head>
        {links.map((link, index) => (
          <link {...link} key={index} />
        ))}
        <meta name="title" content="Esperanza 124 venta de departamentos" />
        <meta
          name="description"
          content="¡Invierte en #ElTambo #Huancayo Obtén tu depa con #titulodepropiedad y #EntregaInmediata de 2 y 3 dormitorios.Whatsapp: 988 226 088"
        />
        <meta
          name="keywords"
          content="departamentos en venta, venta de departamentos, hogar, dulce hogar, casa nuevo, titulo de propiedad, entrega inmediata, pio pata, el tambo, huancayo, departamentos modernos, departamentos nuevos, departamento"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
      </Head>
      <body
        style={{
          background: "#f1f1f1",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
