'use client'

import { useEffect, useRef } from "react";

const ObserverDiv = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("test");
        }
      },
      { threshold: 0.5 } // 50% ของ div ต้องอยู่ใน viewport
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      className="h-96 bg-blue-500 flex items-center justify-center"
    >
      <p className="text-white">Scroll ถึง div นี้!</p>
    </div>
  );
};

export default ObserverDiv;
