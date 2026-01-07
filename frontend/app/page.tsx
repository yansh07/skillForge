"use client";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  DatabaseZap,
  Rocket,
  SearchCheck,
  UploadCloud,
} from "lucide-react";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 520, damping: 38, mass: 0.6 },
  },
};

// --- Feature Data (The Tech Flex) ---
const features = [
  {
    title: "Hugging Face NLP Parsing",
    description:
      "We don't just read your resume; we psychoanalyze it. Extracting skills, experience, and that one typo you missed.",
    icon: BrainCircuit,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Redis Real-Time Matching",
    description:
      "New jobs hit your dashboard faster than a dopamine hit from Twitter. Sub-millisecond matching because waiting is for boomers.",
    icon: DatabaseZap,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Postgres Vector Search",
    description:
      "We use semantic search to understand context. It's like finding a needle in a haystack, if the needle was glowing neon.",
    icon: SearchCheck,
    color: "from-purple-500 to-violet-500",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="flex-grow relative flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background elements for the "Painter" vibe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 pointer-events-none opacity-20" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          {/* Stewie-esque Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-indigo-300 mb-8 backdrop-blur-md hover:border-indigo-500/50 transition-colors cursor-crosshair">
              <Rocket className="w-4 h-4 animate-pulse" />
              <span>🚀 AI-Powered Job Matching.</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
          >
            Stop Searching Like a Peasant.
            <br />
            <span className="text-gradient-hackerman block mt-2">
              Start Matching with AI.
            </span>
          </motion.h1>

          {/* Stewie Griffin Tone Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Because manually scrolling through job boards is *so* 2023. Let our
            Hugging Face models handle the boring stuff while you prepare for the
            offer letter.
          </motion.p>

          {/* CTA Buttons - Scream Hover Me Dawg */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
              <UploadCloud className="mr-2 h-5 w-5" />
              Upload Resume & Get Matched
            </motion.button>
            <motion.a
              href="#how-it-works"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-6 py-3"
            >
              See the architecture
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- FEATURES SECTION (The Tech Flex) --- */}
      <section id="features" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Under the Hood (The Sexy Stuff)
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Built with a stack that would make a MAANG engineer blush.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.35 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  transition: { type: "spring", stiffness: 420, damping: 26, mass: 0.9 },
                }}
                className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-all duration-200 ease-out"
              >
                {/* Gradient blob background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200 ease-out bg-gradient-to-br ${feature.color} blur-2xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10 mb-5 ring-1 ring-white/20 group-hover:ring-white/50 transition-all duration-200 ease-out`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}