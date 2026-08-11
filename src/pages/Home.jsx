import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Sparkles, Code2, Database, Cloud } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <main className={dark ? "min-h-screen bg-slate-950 text-white" : "min-h-screen bg-slate-50 text-slate-950"}>
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-72 -left-24 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500">
              <Sparkles size={16} /> Available for opportunities
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.25em] text-blue-500">Hello, I'm Tsepo Khoza</p>
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Full-Stack Software Developer<span className="text-blue-500">.</span>
            </h1>
            <p className={`mt-7 max-w-2xl text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>
              I build modern web applications that turn real-world problems into practical digital solutions using React, Node.js, databases and cloud technologies.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/work" className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500">
                View my work <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <a href="/Tsepo-Khoza-CV.pdf" download className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition hover:-translate-y-1 ${dark ? "border-slate-700 bg-slate-900 hover:border-blue-500" : "border-slate-300 bg-white hover:border-blue-500"}`}>
                <Download size={18} /> Download CV
              </a>
            </div>
            <div className="mt-8 flex gap-5">
              <a aria-label="GitHub" href="https://github.com/khoza-tb" target="_blank" rel="noreferrer" className="text-slate-500 transition hover:text-blue-500"><Github /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/khoza-tb/" target="_blank" rel="noreferrer" className="text-slate-500 transition hover:text-blue-500"><Linkedin /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .1 }} className={`rounded-3xl border p-6 shadow-2xl ${dark ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white"}`}>
            <div className="mb-6 flex items-center justify-between">
              <span className="font-semibold">Developer toolkit</span>
              <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_18px] shadow-emerald-500" />
            </div>
            <div className="grid gap-4">
              {[
                [Code2, "Frontend", "React · JavaScript · Tailwind CSS"],
                [Database, "Backend & Data", "Node.js · Express · MySQL · MongoDB"],
                [Cloud, "Deployment", "Vercel · Render · GitHub · Atlas"],
              ].map(([Icon, title, text], i) => (
                <motion.div key={title} whileHover={{ x: 5 }} className={`flex items-center gap-4 rounded-2xl border p-4 ${dark ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-slate-50"}`}>
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500"><Icon size={23} /></div>
                  <div><h3 className="font-semibold">{title}</h3><p className="text-sm text-slate-500">{text}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`border-y ${dark ? "border-slate-800 bg-slate-900/50" : "border-slate-200 bg-white"}`}>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-3">
          {[['Full-Stack','Frontend + backend development'],['Problem Solver','Practical, user-focused solutions'],['Continuous Learner','Always improving and experimenting']].map(([a,b]) => <div key={a}><h3 className="font-bold text-blue-500">{a}</h3><p className="mt-1 text-sm text-slate-500">{b}</p></div>)}
        </div>
      </section>
    </main>
  );
};

export default Home;
