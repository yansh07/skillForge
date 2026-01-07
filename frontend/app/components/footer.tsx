import Link from "next/link";
import { Github, Linkedin, Twitter, Terminal } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Security", "Roadmap", "Changelog"],
  Company: ["About Us", "Careers (We're hiring)", "Legal", "Contact"],
  Stack: ["Next.js", "FastAPI", "Postgres + Vector", "Redis + Celery"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background relative overflow-hidden">
        {/* Subtle background flare for the footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-900/20 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Column */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">
                Skill<span className="text-gradient-hackerman">Forge</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Forge your future with intelligent job matching. We use heavy-duty AI to stop you from doom-scrolling job boards like it&apos;s 2015.
            </p>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-slate-400 hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Product
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerLinks.Product.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-slate-400 hover:text-accent transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Stack
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerLinks.Stack.map((item) => (
                    <li key={item} className="group flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary group-hover:w-2 transition-all duration-300" />
                      <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
               {/* Extra column if needed, using Company for now */}
               <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerLinks.Company.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-slate-400 hover:text-accent transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-slate-500 text-center">
            &copy; {new Date().getFullYear()} SkillForge AI. Built by a Tailwind Hacker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}