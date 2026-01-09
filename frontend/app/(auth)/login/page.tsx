"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-8 md:mt-0">
      {/* soft background flair */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] max-w-4xl h-[40vh] bg-gradient-to-r from-indigo-600/15 via-fuchsia-500/15 to-purple-600/15 blur-3xl rounded-full" />
      </div>

      <div className="w-full max-w-xl mb-4 md:mb-0">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="group relative p-2 rounded-lg border border-white/10 bg-white/5 overflow-hidden">
            <Terminal className="w-7 h-7 text-primary xl:w-9 xl:h-9 relative z-10" />
            <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-bold text-3xl md:text-4xl tracking-tight">
            Skill<span className="text-gradient-hackerman">Forge</span>
          </span>
        </div>

        {/* Title */}
        <div className="pt-8">
          <h1 className="font-extrabold tracking-tight text-gray-100 text-3xl md:text-4xl">
            Identify Yourself, Peasant
          </h1>
          <p className="mt-2 text-slate-400">
            Go on, authenticate. I promise not to judge your password. Much.
          </p>
        </div>

        {/* Card */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 lg:p-8">
          {/* OAuth */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white text-slate-900 hover:bg-slate-50 active:scale-[0.98] transition-all duration-200 px-4 py-3 font-medium shadow-sm"
              aria-label="Continue with Google"
            >
              <FcGoogle className="text-2xl" />
              <span>Continue with Google</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-slate-900/70 hover:bg-slate-900 active:scale-[0.98] transition-all duration-200 px-4 py-3 font-medium text-slate-100"
              aria-label="Continue with GitHub"
            >
              <FaGithub className="text-xl" />
              <span>Continue with GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="h-px w-full bg-white/10" />
            <span className="absolute inset-0 -top-3 m-auto w-fit px-3 text-xs text-slate-400 bg-slate-950">
              Or define your destiny the hard way
            </span>
          </div>

          {/* Email/Password */}
          <form className="space-y-4" action="#" method="post">
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-xl bg-slate-900/50 border border-white/10 pl-11 pr-3 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-transparent transition"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="w-full rounded-xl bg-slate-900/50 border border-white/10 pl-11 pr-12 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-transparent transition"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 text-sm text-slate-400 select-none">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-transparent text-indigo-500 focus:ring-indigo-400/60"
                />
                Remember me (I’m unforgettable anyway)
              </label>
              <Link
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            >
              Enter, if you dare
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-400 text-center">
            New here?{" "}
            <Link
              href="/signup"
              className="text-slate-200 hover:text-white underline-offset-4 hover:underline"
            >
              Create an account
            </Link>{" "}
            — because obviously we need more of you.
          </p>
        </div>
      </div>
    </div>
  );
}
