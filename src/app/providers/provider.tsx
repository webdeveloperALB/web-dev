"use client";
import { Provider } from "react-wrap-balancer";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure you import the CSS
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export function BalancerProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // AOS initialization should happen only after hydration
    AOS.init({
      // Using 'disable' during initial load prevents the classes from being added during SSR
      disable: function() {
        // Return true initially, then switch to false after hydration
        return true;
      },
      // Other options
      once: true,
      duration: 1000,
    });
    
    // Re-initialize after a short delay to enable animations after hydration
    const timer = setTimeout(() => {
      AOS.refresh();
      AOS.init({
        disable: false,
        once: true,
        duration: 1000,
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider>
      {children}
      <Toaster position="top-right" />
    </Provider>
  );
}