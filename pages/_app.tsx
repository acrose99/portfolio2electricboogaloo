import type { AppProps } from "next/app";
import '@csstools/normalize.css';
import "@fontsource/inter";
import { styled } from "../stitches.config";
const Container = styled("main", {
  display: "flex",
  minHeight: "100vh",
  width: "100vw",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `
              radial-gradient(circle 800px at 700px 200px, $violet3, $$transparent),
              radial-gradient(circle 600px at calc(100% - 300px) 300px, $mintA4, $$transparent),
              radial-gradient(circle 800px at right center, $sky3, $$transparent),
              radial-gradient(circle 800px at right bottom, $sky4, $$transparent),
              radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), $mint3, $mintA1, $$transparent)
            `,

  // Safari transparency bug workaround
  $$transparent: "#FDFCFD00",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
        <Component {...pageProps} />
    </Container>
  );
}
