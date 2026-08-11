import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Lightbulb, Users, Target } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const cards = [
    [BriefcaseBusiness, "Build", "I enjoy turning requirements into reliable, responsive applications."],
    [Lightbulb, "Think", "I break technical problems into clear steps and practical solutions."],
    [Users, "Collaborate", "I value communication, Git workflows and constructive teamwork."],
    [Target, "Improve", "I continuously refine my skills through projects and hands-on learning."],
  ];
  return <main className={dark ? "min-h-screen bg-slate-950 text-white" : "min-h-screen bg-slate-50 text-slate-950"}>
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-32">
      <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} className="max-w-3xl">
        <p className="font-semibold uppercase tracking-[.25em] text-blue-500">About me</p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">A developer who likes to build things that matter.</h1>
        <p className={`mt-7 text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>I'm Tsepo Khoza, a Full-Stack Software Developer with a Diploma in Information Technology specializing in Software Development. I enjoy creating practical web applications, learning modern technologies and solving technical problems from both a software and IT-support perspective.</p>
      </motion.div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {cards.map(([Icon,title,desc],i)=><motion.article key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className={`rounded-2xl border p-7 transition hover:-translate-y-1 ${dark?"border-slate-800 bg-slate-900":"border-slate-200 bg-white shadow-sm"}`}><Icon className="text-blue-500" size={28}/><h2 className="mt-5 text-xl font-bold">{title}</h2><p className="mt-2 leading-7 text-slate-500">{desc}</p></motion.article>)}
      </div>
      <div className={`mt-14 rounded-3xl border p-8 sm:p-10 ${dark?"border-slate-800 bg-slate-900/70":"border-slate-200 bg-white"}`}>
        <h2 className="text-2xl font-bold">My approach</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3"><div><b>01 · Understand</b><p className="mt-2 text-sm leading-6 text-slate-500">Understand the user, requirements and problem before coding.</p></div><div><b>02 · Build</b><p className="mt-2 text-sm leading-6 text-slate-500">Create clean interfaces, APIs and data flows that work together.</p></div><div><b>03 · Improve</b><p className="mt-2 text-sm leading-6 text-slate-500">Test, troubleshoot, deploy and keep improving the result.</p></div></div>
      </div>
    </section>
  </main>;
};
export default About;
