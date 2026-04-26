import { Toaster } from "@/components/ui/sonner";
import { AboutSection } from "./components/AboutSection";
import { CommunitySection } from "./components/CommunitySection";
import { ConnectSection } from "./components/ConnectSection";
import { FocusAreasSection } from "./components/FocusAreasSection";
import { HeroSection } from "./components/HeroSection";
import { InitiativesSection } from "./components/InitiativesSection";
import { NavHeader } from "./components/NavHeader";
import { SiteFooter } from "./components/SiteFooter";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            backgroundColor: "oklch(var(--navy-mid))",
            border: "1px solid oklch(var(--gold) / 0.2)",
            color: "oklch(var(--white))",
          },
        }}
      />
      <NavHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <FocusAreasSection />
        <CommunitySection />
        <InitiativesSection />
        <TestimonialsSection />
        <ConnectSection />
      </main>
      <SiteFooter />
    </>
  );
}
