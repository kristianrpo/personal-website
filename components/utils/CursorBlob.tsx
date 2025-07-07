"use client";

import { useEffect, useRef } from "react";

export default function CursorBlob() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const blob = blobRef.current;
  if (!blob) return;

  blob.style.pointerEvents = "none";

  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;

  const speed = 0.2;

  const handleMouseMove = (e: MouseEvent) => {
    targetX = e.clientX;
    targetY = e.clientY;
  };

  const animate = () => {
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;
    blob.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(animate);
  };

  animate();
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  return (
    <div
      ref={blobRef}
      className="
        fixed top-0 left-0 z-50
        w-24 h-24
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-[#293038] 
        blur-3xl
        mix-blend-screen
        transition-transform duration-150
        will-change-transform
      "
    />
  );
}
