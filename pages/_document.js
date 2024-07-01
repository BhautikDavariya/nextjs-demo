import Cookies from "js-cookie";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const theme = Cookies.get("theme");
  return (
    <Html lang="en" data-theme={theme?.value}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
