import { HeroSection } from "@/components/hero";
import { PillarsSection } from "@/components/pillars";
import { SecretSauceSection } from "@/components/secret-sauce";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal-900 text-foreground selection:bg-electric-400 selection:text-charcoal-900">
      <HeroSection />
      <PillarsSection />
      <SecretSauceSection />
    </main>
  );
}
