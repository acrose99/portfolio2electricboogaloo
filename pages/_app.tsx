import type { AppProps } from "next/app";
import "@csstools/normalize.css";
import "../global.css";
import "@fontsource/roboto-mono";
import "@fontsource/inter";
import { styled, darkTheme } from "../stitches.config";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "100vw",
  backgroundImage: `linear-gradient(to right, $sky1, $$transparent), 
                    linear-gradient(to top right, $mintA5, $$transparent),
                    linear-gradient(to top left, $sky2, $$transparent),
                    linear-gradient(to bottom left, $sky3, $$transparent),
                    linear-gradient(to top right, $mint1, $sky1, $$transparent)`,
  backgroundSize: "cover",
  // Safari transparency bug workaround
  $$transparent: "#FDFCFD00",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
          url: "https://www.alexrose.xyz/",
          title: "Alex Rose",
          description: "Alex Rose is a Software Developer located in Chicago",
          images: [
            {
              url: "http://alexrose.xyz/ogImage2.png",
              secureUrl: "https://alexrose.xyz/ogImage2.png",
              width: 180,
              height: 110,
              alt: "Alex Rose",
              type: "image/png",
            },
            {
              url: "http://alexrose.xyz/ogImage.png",
              secureUrl: "https://alexrose.xyz/ogImage.png",
              width: 1200,
              height: 630,
              alt: "Alex Rose",
              type: "image/png",
            },
          ],
          site_name: "Alex Rose",
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
        <Container>
          <Navbar />
          <main
            style={{
              minHeight: "80vh",
            }}
          >
            <Component {...pageProps} />
          </main>
          <Footer />
        </Container>
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
    </>
  );
}
