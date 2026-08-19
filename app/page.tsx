"use client";

import Loader from "@/Components/Loader";
import Navbar from "@/Components/Navbar";
import HomeSection from "@/Components/Home";
import ProjectSection from "@/Components/Project";
import AboutSection from "@/Components/About";
import ContactSection from "@/Components/Contact";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <HomeSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
