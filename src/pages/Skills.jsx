import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Wrench, Monitor } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const groups = [
  [Code2,"Frontend",['React.js','JavaScript','HTML5','CSS3','Tailwind CSS','shadcn/ui','Framer Motion','Responsive Design']],
  [Server,"Backend",['Node.js','Express.js','PHP','RESTful APIs','Authentication','API Integration']],
  [Database,"Databases",['MySQL','SQL','MongoDB','Mongoose','Database Design']],
  [Cloud,"Cloud & Deployment",['Vercel','Render','MongoDB Atlas','GitHub']],
  [Wrench,"Tools & Workflow",['Git','GitHub','Vite','Postman','MySQL Workbench','phpMyAdmin','XAMPP']],
  [Monitor,"Systems & IT",['Windows','Linux','macOS','IT Troubleshooting','User Support','SDLC']]
];
const Skills=()=>{const {theme}=useTheme();const dark=theme==='dark';return <main className={dark?'min-h-screen bg-slate-950 text-white':'min-h-screen bg-slate-50 text-slate-950'}><section className="mx-auto max-w-7xl px-6 pb-20 pt-32"><div className="max-w-3xl"><p className="font-semibold uppercase tracking-[.25em] text-blue-500">Skills & tools</p><h1 className="mt-3 text-4xl font-black sm:text-6xl">The stack I use to turn ideas into working software.</h1><p className="mt-6 text-lg leading-8 text-slate-500">A practical toolkit covering frontend interfaces, backend services, databases, deployment and technical support.</p></div><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{groups.map(([Icon,title,items],i)=><motion.article key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} className={`rounded-3xl border p-7 ${dark?'border-slate-800 bg-slate-900':'border-slate-200 bg-white shadow-sm'}`}><div className="flex items-center gap-3"><div className="rounded-xl bg-blue-500/10 p-3 text-blue-500"><Icon size={24}/></div><h2 className="text-xl font-bold">{title}</h2></div><div className="mt-6 flex flex-wrap gap-2">{items.map(x=><span key={x} className={`rounded-full px-3 py-2 text-sm ${dark?'bg-slate-800 text-slate-300':'bg-slate-100 text-slate-700'}`}>{x}</span>)}</div></motion.article>)}</div></section></main>};export default Skills;
