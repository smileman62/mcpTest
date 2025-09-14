import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <AppHeader />
      <main className="container mx-auto w-full max-w-6xl p-4 sm:p-6">{children}</main>
      <AppFooter />
    </div>
  );
}