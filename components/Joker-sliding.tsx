"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface JokerSlidingProps {
  className?: string;
  onComplete?: () => void;
  autoPlay?: boolean;
  delay?: number;
}

export default function JokerSliding({
  className = "",
  onComplete,
  autoPlay = true,
  delay = 0,
}: JokerSlidingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          onComplete?.();
        },
      });

      // Initial state - both halves together
      gsap.set([leftHalfRef.current, rightHalfRef.current], {
        clipPath: "inset(0 0% 0 0%)",
        x: 0,
      });

      // Break animation - split in half and slide outward
      timeline
        .to(
          leftHalfRef.current,
          {
            clipPath: "inset(0 50% 0 0%)",
            x: "-100%",
            duration: 1.2,
            ease: "power3.inOut",
          },
          delay
        )
        .to(
          rightHalfRef.current,
          {
            clipPath: "inset(0 0% 0 50%)",
            x: "100%",
            duration: 1.2,
            ease: "power3.inOut",
          },
          delay
        );
    }, containerRef);

    return () => ctx.revert();
  }, [autoPlay, delay, onComplete]);

  const triggerAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          onComplete?.();
        },
      });

      timeline
        .to(
          leftHalfRef.current,
          {
            clipPath: "inset(0 50% 0 0%)",
            x: "-100%",
            duration: 1.2,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          rightHalfRef.current,
          {
            clipPath: "inset(0 0% 0 50%)",
            x: "100%",
            duration: 1.2,
            ease: "power3.inOut",
          },
          0
        );
    }, containerRef);

    return () => ctx.revert();
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Left Half */}
      <div
        ref={leftHalfRef}
        className="absolute inset-0 origin-left"
        style={{
          clipPath: "inset(0 0% 0 0%)",
        }}
      >
        <Image
          src="/Joker-Slider.svg"
          alt="Joker's Realm"
          fill
          className="object-contain"
          priority
          style={{
            objectPosition: "left center",
          }}
        />
      </div>

      {/* Right Half */}
      <div
        ref={rightHalfRef}
        className="absolute inset-0 origin-right"
        style={{
          clipPath: "inset(0 0% 0 0%)",
        }}
      >
        <Image
          src="/Joker-Slider.svg"
          alt="Joker's Realm"
          fill
          className="object-contain"
          priority
          style={{
            objectPosition: "right center",
          }}
        />
      </div>

      {/* Optional: Trigger button for manual control */}
      {!autoPlay && (
        <button
          onClick={triggerAnimation}
          className="absolute inset-0 z-10 w-full h-full bg-transparent cursor-pointer"
          aria-label="Trigger animation"
        />
      )}
    </div>
  );
}
