"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { capabilities } from "@/data/content";
import Link from "next/link";

export default function Home() {
  return (
    <main id="home" className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <motion.p 
          className="font-mono text-xs tracking-widest uppercase text-text-secondary mb-8 ml-0 md:ml-0 lg:ml-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }}
        >
          Full-Stack Developer & Software Architect
        </motion.p>
        
        <motion.h1 
          className="font-playfair text-5xl md:text-8xl lg:text-9xl text-text-primary leading-[0.9] mb-12"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.7, type: "spring", stiffness: 50 }}
        >
          Crafting seamless <br />
          digital experiences from <span className="italic text-accent">front to back.</span>
        </motion.h1>

        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}
        >
          <Link href="#work" className="group flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors ml-4">
            <span>View selected work</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown strokeWidth={1.5} size={16} />
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-subtle">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={cap.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
            >
              <span className="font-mono text-xs text-accent tracking-widest">({cap.id})</span>
              <h3 className="font-playfair text-3xl text-text-primary mt-4 mb-4 group-hover:italic transition-all duration-500">
                {cap.title}
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-xs">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}