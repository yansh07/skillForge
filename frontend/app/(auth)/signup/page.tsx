"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { FaBriefcase, FaUser } from "react-icons/fa";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"candidate" | "recruiter" | null>(null);
  // TODO: API LOGIC - Add state for form data and loading/error states
  // const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "", role: selectedRole });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // TODO: API LOGIC - Handle form submission and call user creation endpoint
  // const handleSignup = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!selectedRole) {
  //     setError("Please select a role");
  //     return;
  //   }
  //   setLoading(true);
  //   setError("");
  //   try {
  //     const response = await fetch("/api/auth/signup", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({...formData, role: selectedRole}),
  //     });
  //     if (!response.ok) throw new Error("Signup failed");
  //     // Redirect to login or dashboard
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "Something went wrong");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-6 md:mt-8">
      {/* soft background flair */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] max-w-4xl h-[40vh] bg-gradient-to-r from-indigo-600/15 via-fuchsia-500/15 to-purple-600/15 blur-3xl rounded-full" />
      </div>

      <div className="w-full max-w-xl mb-4">
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
            Join the Elite, Peasant
          </h1>
          <p className="mt-2 text-slate-400">
            Create your account and stop wasting time on job boards. We&apos;ll do the heavy lifting.
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
              <span>Google</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-slate-900/70 hover:bg-slate-900 active:scale-[0.98] transition-all duration-200 px-4 py-3 font-medium text-slate-100"
              aria-label="Continue with GitHub"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="h-px w-full bg-white/10" />
            <span className="absolute inset-0 -top-3 m-auto w-fit px-3 text-xs text-slate-400 bg-slate-950">
              Or forge your path manually
            </span>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-200 mb-3">
              Who are you, really?
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole("candidate")}
                className={`flex flex-col items-center gap-3 rounded-xl border-2 transition-all duration-200 px-4 py-4 font-medium ${
                  selectedRole === "candidate"
                    ? "border-indigo-500 bg-indigo-500/10 text-indigo-300"
                    : "border-white/10 bg-slate-900/50 text-slate-400 hover:border-white/20"
                }`}
              >
                <FaUser className="text-2xl" />
                <span>Candidate</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("recruiter")}
                className={`flex flex-col items-center gap-3 rounded-xl border-2 transition-all duration-200 px-4 py-4 font-medium ${
                  selectedRole === "recruiter"
                    ? "border-purple-500 bg-purple-500/10 text-purple-300"
                    : "border-white/10 bg-slate-900/50 text-slate-400 hover:border-white/20"
                }`}
              >
                <FaBriefcase className="text-2xl" />
                <span>Recruiter</span>
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <MdPersonOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full name"
                className="w-full rounded-xl bg-slate-900/50 border border-white/10 pl-11 pr-3 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-transparent transition"
                // TODO: API LOGIC - Update formData on change: onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Email */}
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
                // TODO: API LOGIC - Update formData on change: onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Password */}
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
                placeholder="Password (make it spicy)"
                className="w-full rounded-xl bg-slate-900/50 border border-white/10 pl-11 pr-12 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-transparent transition"
                // TODO: API LOGIC - Update formData on change: onChange={(e) => setFormData({...formData, password: e.target.value})}
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

            {/* Confirm Password */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                placeholder="Confirm password (no typos, genius)"
                className="w-full rounded-xl bg-slate-900/50 border border-white/10 pl-11 pr-12 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-transparent transition"
                // TODO: API LOGIC - Update formData on change: onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
              <button
                type="button"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition"
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            {/* Terms & Conditions */}
            <label className="flex items-start gap-2 text-sm text-slate-400 select-none pt-1">
              <input
                type="checkbox"
                required
                className="h-4 w-4 rounded border-white/20 bg-transparent text-indigo-500 focus:ring-indigo-400/60 mt-0.5"
              />
              <span>
                I agree to the{" "}
                <Link href="#" className="text-slate-200 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-slate-200 hover:underline">
                  Privacy Policy
                </Link>
                . (Read them or don&apos;t, your call.)
              </span>
            </label>

            {/* TODO: API LOGIC - Display error message if signup fails */}
            {/* {error && <p className="text-sm text-red-400 text-center">{error}</p>} */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!selectedRole}
              // TODO: API LOGIC - Call handleSignup on form submit: onClick={handleSignup} disabled={loading || !selectedRole}
              className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* TODO: API LOGIC - Show loading state: {loading ? "Creating your legacy..." : "Create Account"} */}
              Create Account
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-400 text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-slate-200 hover:text-white underline-offset-4 hover:underline"
            >
              Log in
            </Link>{" "}
            — because you&apos;re not a newbie.
          </p>
        </div>
      </div>
    </div>
  );
}