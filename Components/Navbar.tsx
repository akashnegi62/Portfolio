"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3.5, type: "spring", stiffness: 50 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="#home" className="text-text-primary font-playfair text-xl md:text-2xl z-50">
          Portfolio<span className="italic text-accent">Aka</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 px-8 py-3 bg-bg-glass backdrop-blur-md border border-border-subtle rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase text-text-secondary hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle placeholder - simplified for now */}
        <div className="md:hidden text-text-secondary font-mono text-xs uppercase tracking-widest bg-bg-glass px-4 py-2 rounded-full border border-border-subtle">
          Menu
        </div>
      </div>
    </motion.header>
  );
}
