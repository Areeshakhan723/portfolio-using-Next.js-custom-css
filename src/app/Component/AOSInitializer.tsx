"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return null; // This component doesn't render anything
};

export default AOSInitializer;
