"use client";

import Image from "next/image";
import { useRef } from "react";

export function InteractivePortrait() {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    frameRef.current?.style.setProperty("--portrait-rotate-x", `${vertical * -8}deg`);
    frameRef.current?.style.setProperty("--portrait-rotate-y", `${horizontal * 8}deg`);
    imageRef.current?.style.setProperty("--portrait-x", `${horizontal * 12}px`);
    imageRef.current?.style.setProperty("--portrait-y", `${vertical * 9}px`);
  }

  function resetPosition() {
    frameRef.current?.style.setProperty("--portrait-rotate-x", "0deg");
    frameRef.current?.style.setProperty("--portrait-rotate-y", "0deg");
    imageRef.current?.style.setProperty("--portrait-x", "0px");
    imageRef.current?.style.setProperty("--portrait-y", "0px");
  }

  return (
    <div ref={frameRef} className="portrait-frame" onPointerMove={handlePointerMove} onPointerLeave={resetPosition}>
      <Image ref={imageRef} src="/images/june-rhomel.jpg" alt="June Rhomel Mandigma" fill priority sizes="(max-width: 800px) 80vw, 42vw" />
    </div>
  );
}
