import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("../components/pdfViewer"), {
  ssr: false,
});

function Resume() {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });
  /* Window size useEffect */
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);
  return (
    <div
    >
      <PdfViewer url={"./Resume.pdf"} width={windowSize.width / 2} />
    </div>
  );
}

export default Resume;
