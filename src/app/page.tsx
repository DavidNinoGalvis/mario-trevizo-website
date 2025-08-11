"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import dynamic from "next/dynamic";

const ConcreteMixerSection = dynamic(
  () => import("@/components/ConcreteMixerSection"),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <ConcreteMixerSection />
    </main>
  );
}
