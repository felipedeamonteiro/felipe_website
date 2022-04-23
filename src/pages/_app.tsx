import { useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Felipe de Alcântara Monteiro</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
