import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Service from "@/components/main/Service";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 bg-[#18122b] text-gray-200">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Service />
      </div>
    </main>
  );
}

