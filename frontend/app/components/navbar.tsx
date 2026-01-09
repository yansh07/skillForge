"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Pricing (LOL, it's free)", href: "#" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 h-16 backdrop-blur-lg border-b border-white/10 bg-background/60 supports-[backdrop-filter]:bg-background/10"
    >
      <div className="max-w-7xl mx-auto px-4sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative p-2 bg-white/5 rounded-lg border border-white/10 overflow-hidden group-hover:border-primary/50 transition-colors duration-300">
            <Terminal className="w-5 h-5 text-primary relative z-10" />
            {/* Hackerman glow effect behind logo */}
            <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-bold text-xl tracking-tight">
            Skill<span className="text-gradient-hackerman">Forge</span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-slate-300 hover:text-white transition-colors relative group overflow-hidden"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                Get Started <Sparkles className="w-4 h-4" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}