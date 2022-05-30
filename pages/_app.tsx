import type { AppProps } from "next/app";
import "@csstools/normalize.css";
import "../global.css";
import "@fontsource/roboto-mono"; 
import "@fontsource/inter";
import { styled, darkTheme } from "../stitches.config";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "100vw",
  overflow: "hidden",
  backgroundImage: `
              radial-gradient(circle 800px at 700px 200px, $violet1, $$transparent),
              radial-gradient(circle 600px at calc(100% - 300px) 300px, $mintA3, $$transparent),
              radial-gradient(circle 800px at right center, $sky3, $$transparent),
              radial-gradient(circle 800px at right bottom, $sky1, $$transparent),
              radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), $mint2, $sky3, $$transparent)
            `,
  backgroundSize: "cover",
  // Safari transparency bug workaround
  $$transparent: "#FDFCFD00",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
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
            minHeight: "90vh",
          }}
        >
          <Component  {...pageProps} />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
