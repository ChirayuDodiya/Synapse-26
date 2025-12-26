"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HallOfFameImage {
  src: string;
  alt: string;
}

// Placeholder images - replace with actual images when available
const hallOfFameImages: HallOfFameImage[] = [
  { src: "/placeholder-1.jpg", alt: "Concert crowd" },
  { src: "/placeholder-2.jpg", alt: "Festival attendees" },
  { src: "/placeholder-3.jpg", alt: "Stage performance" },
  { src: "/placeholder-4.jpg", alt: "Artist on stage" },
  { src: "/placeholder-5.jpg", alt: "Stage lights" },
  { src: "/placeholder-6.jpg", alt: "Night event" },
  { src: "/placeholder-7.jpg", alt: "Celebration" },
  { src: "/placeholder-8.jpg", alt: "Performance" },
  { src: "/placeholder-9.jpg", alt: "Event moment" },
];

export default function HallOfFame() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header image fade-in
      if (headerImageRef.current) {
        gsap.fromTo(
          headerImageRef.current,
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
          }
        );
      }

      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5,
          }
        );
      }

      // Description animation
      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.7,
          }
        );
      }

      // Grid images animation with ScrollTrigger
      if (gridRef.current) {
        const gridItems = gridRef.current.querySelectorAll(".grid-item");
        
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            if (gridItems.length > 0) {
              gsap.fromTo(
                gridItems,
                {
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: "power2.out",
                  stagger: 0.1,
                }
              );
            }
          },
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Header Image */}
      <div
        ref={headerImageRef}
        className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden"
      >
        {/* Placeholder for header image - replace with actual image */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-blue-900/80 to-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/20 text-6xl md:text-8xl font-black">
              SYNAPSE
            </div>
          </div>
        </div>
        
        {/* Confetti effect overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 bg-black px-6 md:px-12 py-12 md:py-20">
        {/* Title Section */}
        <div className="max-w-7xl mx-auto mb-8 md:mb-12">
          <h1
            ref={titleRef}
            className="text-7xl md:text-9xl font-black text-white leading-none mb-4 opacity-0"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', 'Impact', sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            SYNAPSE
          </h1>
          <h2
            ref={subtitleRef}
            className="text-4xl md:text-6xl font-black text-white leading-none mb-6 opacity-0"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', 'Impact', sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Hall of Fame
          </h2>
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed opacity-0"
          >
            The iconic moments from Synapse that left a mark on the fest, captured
            and remembered as part of the Joker&apos;s Realm.
          </p>
        </div>

        {/* Image Grid */}
        <div
          ref={gridRef}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {hallOfFameImages.map((image, index) => (
            <div
              key={index}
              className="grid-item relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer opacity-0"
            >
              {/* Placeholder gradient - replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-black group-hover:scale-110 transition-transform duration-500" />
              
              {/* Image placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/30 text-sm font-medium">
                  Image {index + 1}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
