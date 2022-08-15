import { Html, Head, Main, NextScript } from "next/document";

const links = [
  {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
  },
];

export default function Document() {
  return (
    <Html>
      <Head>
        {links.map((link, index) => (
          <link {...link} key={index} />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
