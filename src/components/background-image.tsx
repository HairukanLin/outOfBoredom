"use client";

import { useSyncExternalStore } from "react";

const backgrounds = ["/naw_web.jpeg", "/maomao.jpeg", "/nawr_web.jpeg", "/ffy_web.jpeg"]
const mobileBackgrounds = ["/naw_mobile.PNG", "/maomao_mobile.jpeg", "/nawr_web.jpeg", "/ffy_mobile.jpg"]

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => false                             
  );
}


export default function BackgroundImageComponent({ albumIndex }: { albumIndex: number }) {

    const isMobile = useMediaQuery("(max-width: 768px)");
    const list = isMobile ? mobileBackgrounds : backgrounds;
    const image = list[albumIndex] ?? list[0];

    return  (
        <div
        style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
      }}
    />
    );
}