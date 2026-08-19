"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <main id="work" className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <motion.p 
        className="font-mono text-xs tracking-widest uppercase text-text-secondary mb-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      >
        (Selected Work) — 06 Projects
      </motion.p>

      <h2 className="font-playfair text-4xl md:text-6xl text-text-primary mb-20">
        Systems built to be <span className="italic text-accent">touched.</span>
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="group flex flex-col bg-bg-glass backdrop-blur-md border border-border-subtle rounded-2xl overflow-hidden hover:border-accent transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
          >
            {/* Project Image */}
            <div className="relative w-full h-48 bg-bg-secondary overflow-hidden border-b border-border-subtle">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            
            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-text-secondary tracking-widest">{project.id}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-bg-primary hover:bg-accent hover:text-bg-primary text-text-primary border border-border-subtle rounded-full w-8 h-8 transition-colors"
                  title="Open Project"
                >
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
              </div>
              
              <h3 className="font-playfair text-2xl text-text-primary mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="font-mono text-xs text-accent mb-4 tracking-wider">
                {project.stack}
              </p>
              
              <p className="text-text-secondary text-sm leading-relaxed mb-6 grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] uppercase tracking-widest text-text-secondary bg-bg-primary px-3 py-1 rounded-full border border-border-subtle">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}