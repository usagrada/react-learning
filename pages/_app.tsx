import "~/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "~/src/layout/Header";
import CustomThemeProvider from "~/src/provider/theme.provider";
import Footer from "~/src/layout/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Head>
        <title>Learning Site</title>
        <meta name="description" content="Learning Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </CustomThemeProvider>
  );
}
export default MyApp;
