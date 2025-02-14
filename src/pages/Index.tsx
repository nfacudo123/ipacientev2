
import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { DashboardCards } from "@/components/DashboardCards";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="min-h-screen flex w-full bg-[hsl(var(--background))] transition-colors duration-200">
      <Sidebar 
        isDark={isDark}
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      <MobileHeader toggleMobileMenu={toggleMobileMenu} />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 pt-20 md:pt-4">
        {/* Welcome Message */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))] mb-1">
            Bienvenido paciente Juan Pérez
          </h1>
          <p className="text-[hsl(var(--text-secondary))]">
            juan.perez@ejemplo.com
          </p>
        </div>

        {/* Header Banner */}
        <div className="w-full h-[300px] bg-[hsl(var(--card))] rounded-xl mb-6">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
            alt="Doctor en consulta" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <DashboardCards />
      </main>
    </div>
  );
};

export default Index;
