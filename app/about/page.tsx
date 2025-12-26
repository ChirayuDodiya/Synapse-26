"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/Resizable-navbar";
import JokerSliding from "@/components/Joker-sliding";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Events", link: "/events" },
  { name: "About", link: "/about" },
];

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const paragraph3Ref = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const pageSplitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      // Paragraph animations
      gsap.fromTo(
        paragraph1Ref.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.4 }
      );

      gsap.fromTo(
        paragraph2Ref.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.6 }
      );

      gsap.fromTo(
        paragraph3Ref.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.8 }
      );

      // Card animation - entrance with rotation
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, rotate: -45, scale: 0.8, x: 100 },
        {
          opacity: 1,
          rotate: 15,
          scale: 1,
          x: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );

      // Subtle floating animation for the card
      gsap.to(cardRef.current, {
        y: -15,
        rotate: 17,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });

      // Page split animation - after initial content loads
      const splitTimeline = gsap.timeline({
        delay: 3, // Wait for content to be visible
      });

      splitTimeline
        .to(
          leftHalfRef.current,
          {
            clipPath: "inset(0 50% 0 0%)",
            x: "-100%",
            duration: 1.5,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          rightHalfRef.current,
          {
            clipPath: "inset(0 0% 0 50%)",
            x: "100%",
            duration: 1.5,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          pageSplitRef.current,
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Page Split Container - Full Page Split Effect */}
      <div ref={pageSplitRef} className="fixed inset-0 z-50 overflow-hidden">
        {/* Left Half */}
        <div
          ref={leftHalfRef}
          className="absolute inset-0 origin-left"
          style={{
            clipPath: "inset(0 0% 0 0%)",
          }}
        >
          <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden w-full h-full">
            <Navbar>
              <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
              </NavBody>
              <MobileNav>
                <MobileNavHeader>
                  <NavbarLogo />
                  <MobileNavToggle
                    isOpen={mobileMenuOpen}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  />
                </MobileNavHeader>
                <MobileNavMenu
                  isOpen={mobileMenuOpen}
                  onClose={() => setMobileMenuOpen(false)}
                >
                  {navItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                    >
                      {item.name}
                    </a>
                  ))}
                </MobileNavMenu>
              </MobileNav>
            </Navbar>
            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left Column - Text Content */}
                <div className="space-y-8 md:space-y-10">
                  {/* Title */}
                  <h1
                    ref={titleRef}
                    className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none"
                    style={{
                      fontFamily: "var(--font-bebas), 'Bebas Neue', 'Impact', sans-serif",
                      letterSpacing: "0.05em",
                      textShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    ABOUT SYnapse
                  </h1>

                  {/* Paragraphs */}
                  <div className="space-y-6 md:space-y-8 text-white/90 text-lg md:text-xl leading-relaxed">
                    <p
                      ref={paragraph1Ref}
                      className="opacity-0"
                    >
                      Synapse is more than a college fest – it&apos;s an experience. A
                      convergence of creativity, competition, culture, and chaos, Synapse
                      brings together minds that dare to think, perform, and challenge the
                      ordinary.
                    </p>

                    <p
                      ref={paragraph2Ref}
                      className="opacity-0"
                    >
                      This year, Synapse &apos;26 invites you into{" "}
                      <span className="text-red-400 font-semibold">The Joker&apos;s Realm</span>{" "}
                      — a world where every choice is a move, every event is a game, and
                      nothing is ever as simple as it seems. Inspired by the concept of{" "}
                      <span className="text-red-400 font-semibold">House of Cards</span>, the
                      realm is ruled by unpredictability, strategy, and thrill.
                    </p>

                    <p
                      ref={paragraph3Ref}
                      className="opacity-0"
                    >
                      From high-energy concert nights and intense competitions to immersive
                      events spread across four action-packed days, Synapse &apos;26 transforms
                      the campus into a playground of possibilities. Step in, choose your
                      game, and remember – in the Joker&apos;s Realm,{" "}
                      <span className="text-red-400 font-semibold italic">
                        the game is always watching.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right Column - Playing Card */}
                <div className="relative flex items-center justify-center lg:justify-end">
                  <div
                    ref={cardRef}
                    className="relative w-64 h-96 md:w-80 md:h-112 opacity-0"
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    {/* Card Shadow */}
                    <div
                      className="absolute inset-0 bg-black/50 blur-2xl"
                      style={{
                        transform: "translateZ(-50px) scale(1.1)",
                      }}
                    />

                    {/* Card Container */}
                    <div
                      className="relative w-full h-full bg-white rounded-2xl shadow-2xl"
                      style={{
                        transform: "rotateZ(15deg)",
                        boxShadow:
                          "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {/* Card Border Pattern */}
                      <div className="absolute inset-2 rounded-xl border-2 border-black/10" />

                      {/* Ace of Spades Symbol - Center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-black text-9xl md:text-[12rem] font-black leading-none">
                          ♠
                        </div>
                      </div>

                      {/* Top Left - Ace */}
                      <div className="absolute top-4 left-4 flex flex-col items-center">
                        <div className="text-black text-3xl font-bold">A</div>
                        <div className="text-black text-2xl">♠</div>
                      </div>

                      {/* Bottom Right - Ace (rotated) */}
                      <div
                        className="absolute bottom-4 right-4 flex flex-col items-center"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div className="text-black text-3xl font-bold">A</div>
                        <div className="text-black text-2xl">♠</div>
                      </div>

                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-br from-white via-white to-gray-100 rounded-2xl opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagonal Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 overflow-hidden">
              <div
                className="absolute inset-0 bg-white"
                style={{
                  clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Right Half */}
        <div
          ref={rightHalfRef}
          className="absolute inset-0 origin-right"
          style={{
            clipPath: "inset(0 0% 0 0%)",
          }}
        >
          <div className="relative min-h-screen bg-black overflow-hidden w-full h-full">
            <Navbar>
              <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
              </NavBody>
              <MobileNav>
                <MobileNavHeader>
                  <NavbarLogo />
                  <MobileNavToggle
                    isOpen={mobileMenuOpen}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  />
                </MobileNavHeader>
                <MobileNavMenu
                  isOpen={mobileMenuOpen}
                  onClose={() => setMobileMenuOpen(false)}
                >
                  {navItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                    >
                      {item.name}
                    </a>
                  ))}
                </MobileNavMenu>
              </MobileNav>
            </Navbar>
            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left Column - Text Content */}
                <div className="space-y-8 md:space-y-10">
                  {/* Title */}
                  <h1
                    className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none"
                    style={{
                      fontFamily: "var(--font-bebas), 'Bebas Neue', 'Impact', sans-serif",
                      letterSpacing: "0.05em",
                      textShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    ABOUT SYnapse
                  </h1>

                  {/* Paragraphs */}
                  <div className="space-y-6 md:space-y-8 text-white/90 text-lg md:text-xl leading-relaxed">
                    <p>
                      Synapse is more than a college fest – it&apos;s an experience. A
                      convergence of creativity, competition, culture, and chaos, Synapse
                      brings together minds that dare to think, perform, and challenge the
                      ordinary.
                    </p>

                    <p>
                      This year, Synapse &apos;26 invites you into{" "}
                      <span className="text-red-400 font-semibold">The Joker&apos;s Realm</span>{" "}
                      — a world where every choice is a move, every event is a game, and
                      nothing is ever as simple as it seems. Inspired by the concept of{" "}
                      <span className="text-red-400 font-semibold">House of Cards</span>, the
                      realm is ruled by unpredictability, strategy, and thrill.
                    </p>

                    <p>
                      From high-energy concert nights and intense competitions to immersive
                      events spread across four action-packed days, Synapse &apos;26 transforms
                      the campus into a playground of possibilities. Step in, choose your
                      game, and remember – in the Joker&apos;s Realm,{" "}
                      <span className="text-red-400 font-semibold italic">
                        the game is always watching.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right Column - Playing Card */}
                <div className="relative flex items-center justify-center lg:justify-end">
                  <div
                    className="relative w-64 h-96 md:w-80 md:h-112"
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    {/* Card Shadow */}
                    <div
                      className="absolute inset-0 bg-black/50 blur-2xl"
                      style={{
                        transform: "translateZ(-50px) scale(1.1)",
                      }}
                    />

                    {/* Card Container */}
                    <div
                      className="relative w-full h-full bg-white rounded-2xl shadow-2xl"
                      style={{
                        transform: "rotateZ(15deg)",
                        boxShadow:
                          "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {/* Card Border Pattern */}
                      <div className="absolute inset-2 rounded-xl border-2 border-black/10" />

                      {/* Ace of Spades Symbol - Center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-black text-9xl md:text-[12rem] font-black leading-none">
                          ♠
                        </div>
                      </div>

                      {/* Top Left - Ace */}
                      <div className="absolute top-4 left-4 flex flex-col items-center">
                        <div className="text-black text-3xl font-bold">A</div>
                        <div className="text-black text-2xl">♠</div>
                      </div>

                      {/* Bottom Right - Ace (rotated) */}
                      <div
                        className="absolute bottom-4 right-4 flex flex-col items-center"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        <div className="text-black text-3xl font-bold">A</div>
                        <div className="text-black text-2xl">♠</div>
                      </div>

                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-br from-white via-white to-gray-100 rounded-2xl opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagonal Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 overflow-hidden">
              <div
                className="absolute inset-0 bg-white"
                style={{
                  clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Joker's Realm Section - Revealed after split */}
      <div className="relative w-full min-h-screen bg-white flex items-center justify-center py-20 md:py-32">
        <JokerSliding className="w-full max-w-5xl px-6" />
      </div>
    </>
  );
}
