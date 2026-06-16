"use client";

import { useState } from "react";
import { BootSequence } from "@/components/BootSequence";
import { Background3D } from "@/components/Background3D";
import { BentoGrid } from "@/components/BentoGrid";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Chatbot } from "@/components/Chatbot";
import { MetricNodes } from "@/components/MetricNodes";
import { ClientMarquee } from "@/components/ClientMarquee";
import { FaqSection } from "@/components/FaqSection";
import { HUDOverlay } from "@/components/HUDOverlay";
import { motion } from "framer-motion";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <main className="relative bg-[#050505] text-gray-200 selection:bg-[#FF1E1E] selection:text-white font-sans overflow-x-hidden min-h-screen">

      {/* Multi-layer ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF1E1E]/[0.04] blur-[160px] rounded-full animate-pulse" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[300px] bg-[#FF1E1E]/[0.025] blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[250px] bg-[#FF2200]/[0.03] blur-[120px] rounded-full" />
      </div>

      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      {/* 3D Scene */}
      <Background3D />

      {/* HUD Overlay — scanlines, brackets, data panel */}
      <HUDOverlay />

      <motion.div
        className="relative z-10 w-full flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <div className="w-full">
          <Navbar />

          {/* HERO */}
          <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center px-8 relative pt-40 pb-32 pointer-events-none"
          >
            <div className="max-w-[1400px] w-full flex flex-col items-center text-center mt-20 pointer-events-auto z-10">

              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="text-6xl md:text-8xl lg:text-[120px] font-mono font-black tracking-tighter mb-4 bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-[length:200%_auto] animate-[shimmer_4s_infinite_linear] bg-clip-text text-transparent leading-none drop-shadow-xl pb-2"
              >
                Vyuh Matrix
              </motion.h1>

              {/* Accent divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="w-64 h-[1px] bg-gradient-to-r from-transparent via-red-600/70 to-transparent mb-6"
              />

              <motion.h2
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                className="text-xl md:text-3xl text-gray-500 tracking-tight max-w-4xl font-sans leading-relaxed mt-4 font-light drop-shadow-md"
              >
                <span className="text-gray-100 font-medium tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  We build custom AI to scale your business
                </span>
                <br />
                and secure your digital infrastructure.
              </motion.h2>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="mt-20 flex flex-col items-center gap-2"
              >
                <span className="text-[10px] font-mono text-red-900/60 tracking-[0.35em]">
                  SCROLL
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[1px] h-8 bg-gradient-to-b from-red-900/60 to-transparent"
                />
              </motion.div>
            </div>
          </section>

          {/* METRIC NODES */}
          <section className="py-32 md:py-40 w-full flex justify-center px-8 relative pointer-events-none">
            <div className="pointer-events-auto w-full">
              <MetricNodes />
            </div>
          </section>

          <ClientMarquee />

          {/* SOLUTIONS */}
          <section
            id="solutions"
            className="min-h-screen py-40 md:py-48 flex flex-col justify-center items-center relative pointer-events-none"
          >
            <div className="max-w-[1400px] w-full px-8 mb-20 text-center pointer-events-auto">
              <h2 className="text-3xl font-black tracking-[0.2em] text-gray-400 uppercase">
                &gt; Solutions
              </h2>
            </div>
            <div className="pointer-events-auto w-full relative z-20">
              <BentoGrid />
            </div>
          </section>

          <FaqSection />

          <div className="pointer-events-auto">
            <ContactForm />
            <Footer />
          </div>
        </div>
      </motion.div>

      <Chatbot />
    </main>
  );
}
