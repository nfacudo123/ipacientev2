
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { Topbar } from "@/components/layout/Topbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { DashboardCards } from "@/components/DashboardCards";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex w-full bg-[hsl(var(--background))] transition-colors duration-200">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        onCollapseChange={setIsMenuCollapsed}
      />

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      <MobileHeader toggleMobileMenu={toggleMobileMenu} />
      <Topbar isMenuCollapsed={isMenuCollapsed} />

      <main className={`flex-1 ${isMenuCollapsed ? 'md:ml-[72px]' : 'md:ml-64'} p-4 pt-20 pb-20 md:pb-4 transition-all duration-200`}>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))] mb-1">
            Bienvenido paciente Juan Pérez
          </h1>
          <p className="text-[hsl(var(--text-secondary))]">
            juan.perez@ejemplo.com
          </p>
        </div>

        <DashboardCards />
      </main>

      <MobileMenu />
    </div>
  );
};

export default Index;
