import type { AppProps } from "next/app";
import "@csstools/normalize.css";
import "../global.css";
import "@fontsource/roboto-mono";
import "@fontsource/inter";
import "@fontsource/noto-serif";
import "@radix-ui/colors/mint.css";
import "@radix-ui/colors/mintA.css";
import "@radix-ui/colors/mintDark.css";
import "@radix-ui/colors/mintDarkA.css";
import "@radix-ui/colors/sage.css";
import "@radix-ui/colors/sageDark.css";
import "@radix-ui/colors/sky.css";
import "@radix-ui/colors/skyDark.css";
import "@radix-ui/colors/violet.css";
import "@radix-ui/colors/violetDark.css";
import { styled, theme, darkTheme } from "../stitches.config";
import Footer from "../components/layout/Footer";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/layout/Navbar";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../hooks/useWindowDimensions";

export const SettingContext = createContext(null);
export default function MyApp({ Component, pageProps }: AppProps) {
  const [settings, setSettings] = useState({
    enableEditing: true,
    displayTooltips: true,
  });
  const settingsRef = useRef(useContext(SettingContext));
  return (
    <SettingContext.Provider value={{ settings, setSettings }}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content="Alex Rose" />
        <meta name="designer" content="Alex Rose" />
        <meta name="publisher" content="Alex Rose" />
        <meta
          name="google-site-verification"
          content="VdvpZmr1DbaSdgpZajFCWx4patEfFHA6o1gH42zSFv0"
        />
        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
    <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        title="Alex Rose"
        description="Alex Rose is a Software Developer located in Chicago"
        canonical="https://www.alexrose.xyz/"
        openGraph={{
          type: "website",
          url: "https://www.alexrose.xyz/",
          title: "Alex Rose",
          description: "Alex Rose is a Software Developer located in Chicago",
          site_name: "Alex Rose",
          images: [
            {
              url: "http://alexrose.xyz/OGS.png",
              secureUrl: "https://alexrose.xyz/OGS.png",
              width: 1200,
              height: 630,
              alt: "Alex Rose",
              type: "image/png",
            },
            {
              url: "http://alexrose.xyz/OGS2.png",
              secureUrl: "https://alexrose.xyz/OGS2.png",
              width: 800,
              height: 600,
              alt: "Alex Rose",
              type: "image/png",
            },
          ],
        }}
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          dark: darkTheme.className,
          light: "light",
        }}
      >
        <main id="container">
          <Navbar />
          <div
            style={{
              minHeight: "80vh",
            }}
          >
            <Component {...pageProps} />
          </div>
          <Footer />
        </main>
      </ThemeProvider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-04KLC3DPQS"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-04KLC3DPQS');
        `}
      </Script>
    </SettingContext.Provider>
  );
}
