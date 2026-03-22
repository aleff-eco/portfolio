"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-out-sine",
    });
  }, []);

  return null;
}
