import Hero from "./_components/Hero";
import QuickStats from "./_components/QuickStats";
import FeatureList from "./_components/FeatureList";
import HowItWorks from "./_components/HowItWorks";
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";

export default function Home() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      <AppHeader />
      <main className="row-start-2">
        <Hero />
        <QuickStats />
        <FeatureList />
        <HowItWorks />
      </main>
      <AppFooter />
    </div>
  );
}