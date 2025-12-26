"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          }
        );
      }

      // Contact section animation
      if (contactSectionRef.current) {
        ScrollTrigger.create({
          trigger: contactSectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            const items = contactSectionRef.current?.querySelectorAll(".contact-item");
            if (items && items.length > 0) {
              gsap.fromTo(
                items,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Fireworks Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated fireworks effect using gradients and pseudo-elements */}
        <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 via-pink-900/30 to-black">
          {/* Fireworks particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-300" />
          <div className="absolute top-1/2 left-1/3 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-500" />
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-16 md:py-24">
        {/* SYNAPSE Title */}
        <div className="text-center mb-16 md:mb-20">
          <h1
            ref={titleRef}
            className="text-8xl md:text-[12rem] font-black text-white leading-none opacity-0"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', 'Impact', sans-serif",
              letterSpacing: "0.02em",
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #ef4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 60px rgba(168, 85, 247, 0.3)",
            }}
          >
            SYNAPSE
          </h1>
        </div>

        {/* Contact Section */}
        <div
          ref={contactSectionRef}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16"
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none contact-item opacity-0">
              Contact us
            </h2>
            <p className="text-xl md:text-2xl text-white/80 contact-item opacity-0">
              Reach Us Out At
            </p>

            {/* Contact Persons */}
            <div className="space-y-4 contact-item opacity-0">
              <div className="text-white text-lg md:text-xl">
                <p className="font-semibold">Vivek Chaudhari</p>
                <a
                  href="tel:+916354042414"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +91 6354 042 414
                </a>
              </div>
              <div className="text-white text-lg md:text-xl">
                <p className="font-semibold">Harshali Dharmik</p>
                <a
                  href="tel:+917600051765"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +91 7600 051 765
                </a>
              </div>
              <div className="text-white text-lg md:text-xl">
                <p className="font-semibold">Kushal Desai</p>
                <a
                  href="tel:+919727055132"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +91 9727 055 132
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Address & Email */}
          <div className="flex flex-col items-end lg:items-start space-y-8 lg:pl-8">
            {/* Icons */}
            <div className="flex items-center gap-4 contact-item opacity-0">
              {/* Synapse Logo */}
              <div className="relative w-12 h-12">
                <Image
                  src="/Synapse Logo.png"
                  alt="Synapse Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Placeholder for future image */}
              <div className="w-12 h-12 border-2 border-white/30 rounded-lg flex items-center justify-center bg-black/20">
                <div className="text-white/30 text-xs">Image</div>
              </div>
            </div>

            {/* Address */}
            <div className="text-white text-lg md:text-xl text-right lg:text-left contact-item opacity-0">
              <p className="leading-relaxed">
                DAIICT-campus, near, Reliance Cross Rd,
                <br />
                Gandhinagar, Gujarat 382007
              </p>
            </div>

            {/* Email Addresses */}
            <div className="space-y-2 text-right lg:text-left contact-item opacity-0">
              <a
                href="mailto:synapse.thefest@gmail.com"
                className="block text-white/70 hover:text-white transition-colors text-lg md:text-xl"
              >
                synapse.thefest@gmail.com
              </a>
              <a
                href="mailto:synapse@daiict.ac.in"
                className="block text-white/70 hover:text-white transition-colors text-lg md:text-xl"
              >
                synapse@daiict.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-8 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <a
              href="#"
              className="text-white text-lg md:text-xl font-semibold hover:text-pink-400 transition-colors contact-item opacity-0"
            >
              FACEBOOK
            </a>
            <a
              href="#"
              className="text-white text-lg md:text-xl font-semibold hover:text-pink-400 transition-colors contact-item opacity-0"
            >
              INSTAGRAM
            </a>
            <a
              href="#"
              className="text-white text-lg md:text-xl font-semibold hover:text-pink-400 transition-colors contact-item opacity-0"
            >
              YOUTUBE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
