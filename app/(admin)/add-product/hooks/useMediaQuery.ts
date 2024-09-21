import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleMediaChange = (e: any) => setIsMobile(e.matches);

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);
  return isMobile;
};

export default useMediaQuery;
