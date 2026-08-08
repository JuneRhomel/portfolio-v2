"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function InteractivePortrait() {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const motionDisabled = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)");

    function resetPosition() {
      frameRef.current?.style.setProperty("--portrait-rotate-x", "0deg");
      frameRef.current?.style.setProperty("--portrait-rotate-y", "0deg");
      imageRef.current?.style.setProperty("--portrait-x", "0px");
      imageRef.current?.style.setProperty("--portrait-y", "0px");
    }

    function handlePointerMove(event: PointerEvent) {
      if (motionDisabled.matches) return;
      const horizontal = event.clientX / window.innerWidth - 0.5;
      const vertical = event.clientY / window.innerHeight - 0.5;
      frameRef.current?.style.setProperty("--portrait-rotate-x", `${vertical * -24}deg`);
      frameRef.current?.style.setProperty("--portrait-rotate-y", `${horizontal * 24}deg`);
      imageRef.current?.style.setProperty("--portrait-x", `${horizontal * 34}px`);
      imageRef.current?.style.setProperty("--portrait-y", `${vertical * 25}px`);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", resetPosition);
    window.addEventListener("blur", resetPosition);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", resetPosition);
      window.removeEventListener("blur", resetPosition);
    };
  }, []);

  return (
    <div ref={frameRef} className="portrait-frame">
      <Image ref={imageRef} src="/images/june-rhomel.jpg" alt="June Rhomel Mandigma" fill priority sizes="(max-width: 800px) 80vw, 42vw" />
    </div>
  );
}
