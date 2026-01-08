"use client";
import React from "react";
import { Terminal } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function page() {
  return (
    <div className="px-4 md:px-12 lg:px-0 max-w-3xl mx-auto">
      {/* icon */}
      <div className="flex pt-8 gap-4 items-center">
        <div className="relative p-2 bg-white/5 rounded-lg border border-white/10 overflow-hidden group-hover:border-primary/50 transition-colors duration-300">
          <Terminal className="w-7 h-7 text-primary xl:w-10 xl:h-10 relative z-10" />
          {/* Hackerman glow effect behind logo */}
          <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <span className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-tight">
          Skill<span className="text-gradient-hackerman">Forge</span>
        </span>
      </div>

      <div className="pt-10">
        <div className="font-bold tracking-tight text-gray-100 text-3xl xl:text-4xl lg:text-4xl">
          <h1>
            Identify Yourself, <span className="px-0 md:px-4">Peasant</span>
          </h1>
        </div>
      </div>

      {/* google-icon */}
      <div className="pt-12 items-center justify-items-center text-xl">
        <div className="flex gap-4 items-center border-1 border-blue-500 rounded-2xl p-3 backdrop-blur-2xl bg-gray-900 hover:border-transparent hover:bg-black hover:transition-all hover:duration-500">
          <span className="text-2xl">
            <FcGoogle />
          </span>
          <span>Continue with Google</span>
        </div>
        {/* github-icon  */}
        <div className="mt-5 flex gap-4 items-center border-1 border-blue-500 rounded-2xl p-3 backdrop-blur-2xl bg-gray-900 hover:border-transparent hover:bg-black hover:transition-all hover:duration-500">
          <span className="text-2xl">
            <FaGithub />
          </span>
          <span>Continue with GitHub</span>
        </div>
      </div>
      <div className="text-start px-8 pt-8 text-gray-400">
        <span>Or define the destiny...</span>
      </div>
    </div>
  );
}

export default page;
