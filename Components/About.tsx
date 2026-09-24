"use client";
import { motion } from "framer-motion";
import { techStack } from "@/data/content";

export default function About() {
  return (
    <main id="about" className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.p
        className="font-mono text-xs tracking-widest uppercase text-text-secondary mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        (About)
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <motion.h2
            className="font-playfair text-4xl md:text-6xl text-text-primary mb-12"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            I build the <span className="italic">invisible architecture</span>{" "}
            and the <span className="italic text-accent">tactile surface.</span>
          </motion.h2>

          <motion.div
            className="space-y-6 text-text-secondary leading-relaxed text-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <p>
              Most developers treat the backend and frontend as separate
              disciplines. I treat them as a single continuous material. A
              database query should feel as deliberate as a button hover. An API
              response should carry the same weight as the animation it
              triggers.
            </p>
            <p>
              I engineer full-stack applications where the friction of
              the interface matches the logic of the system. No generic
              templates. No flat animations. Just software that feels like it
              has mass.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-5 lg:pl-12 lg:border-l border-border-subtle">
          <h4 className="font-mono text-xs tracking-widest uppercase text-text-secondary mb-8">
            Core Stack
          </h4>
          <div className="flex flex-wrap gap-3 mb-16">
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-bg-glass border border-border-subtle/5 rounded-full font-mono text-xs text-text-primary backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.05, borderColor: "#2F5FCF" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <h4 className="font-mono text-sm tracking-widest uppercase text-text-secondary mb-8">
            Connect
          </h4>
          <div className="flex gap-6">
            {[
              { label: "GitHub", href: "https://github.com/akashnegi62" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/akash-negi-aa66a334b/" },
              { label: "Mail", href: "mailto:akashnegi7142@gmail.com" },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.label !== "Mail" ? "_blank" : undefined}
                rel={link.label !== "Mail" ? "noopener noreferrer" : undefined}
                className="px-4 py-2 bg-bg-glass border border-border-subtle rounded-full text-text-secondary font-mono text-xs uppercase tracking-widest hover:text-accent hover:border-accent transition-colors"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
