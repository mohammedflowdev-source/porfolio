import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio — Web Developer & UI/UX Designer" },
      {
        name: "description",
        content:
          "Independent designer and developer crafting elegant, premium digital experiences. Available for product, brand, and web engagements.",
      },
      {
        property: "og:title",
        content: "Studio — Web Developer & UI/UX Designer",
      },
      {
        property: "og:description",
        content:
          "Independent designer and developer crafting elegant, premium digital experiences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
