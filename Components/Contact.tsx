"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-bg-primary border-t border-border-subtle"
    >
      <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <motion.p
              className="font-mono text-xs tracking-widest uppercase text-text-secondary mb-8 text-opacity-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              (Contact) — Start a conversation
            </motion.p>

            <motion.h2
              className="font-playfair text-5xl md:text-7xl lg:text-8xl text-text-primary mb-8"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              Let&apos;s build <br />
              <span className="italic text-accent">something real.</span>
            </motion.h2>

            <motion.a
              href="mailto:akashnegi7142@gmail.com"
              className="group inline-flex items-center gap-4 bg-text-primary bg-opacity-20 backdrop-blur-md border border-bg-primary hover:border-text-primary px-8 py-4 rounded-full transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-sm uppercase tracking-widest text-bg-primary transition-colors">
                Let&apos;s Talk
              </span>
              <div className="bg-bg-primary p-2 rounded-full text-text-primary group-hover:bg-text-primary group-hover:text-bg-primary transition-colors">
                <ArrowUpRight strokeWidth={1.5} size={16} />
              </div>
            </motion.a>
          </div>

          <motion.div
            className="flex flex-col gap-4 text-sm font-mono text-text-secondary tracking-widest uppercase text-opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p>© {new Date().getFullYear()} Akash</p>
            <div className="flex gap-6">
              <a href="https://wa.me/+918447326572" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                WhatsApp
              </a>
              <a href="https://www.linkedin.com/in/akash-negi-aa66a334b/" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/akashnegi62" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
