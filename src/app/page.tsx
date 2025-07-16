import Image from "next/image";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
    </main>
  );
}
