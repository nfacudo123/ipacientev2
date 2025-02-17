
import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { Topbar } from "@/components/layout/Topbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Settings, Mail, Lock, GaugeCircle } from "lucide-react";

const Preferences = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState("general");

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
        onCollapseChange={setIsMenuCollapsed}
      />

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      <MobileHeader toggleMobileMenu={toggleMobileMenu} />
      <Topbar isDark={isDark} isMenuCollapsed={isMenuCollapsed} />

      <main className={`flex-1 ${isMenuCollapsed ? 'md:ml-[72px]' : 'md:ml-64'} p-4 pt-20 pb-20 md:pb-4 transition-all duration-200`}>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))]">
            Preferencias
          </h1>
        </div>

        {/* Menú horizontal en desktop, vertical en móvil */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6">
          <button
            onClick={() => setSelectedOption("general")}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
              ${selectedOption === "general" 
                ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
          >
            <Settings className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">General</span>
          </button>
          
          <button
            onClick={() => setSelectedOption("notifications")}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
              ${selectedOption === "notifications" 
                ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
          >
            <Mail className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Notificaciones</span>
          </button>
          
          <button
            onClick={() => setSelectedOption("security")}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
              ${selectedOption === "security" 
                ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
          >
            <Lock className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Seguridad</span>
          </button>
          
          <button
            onClick={() => setSelectedOption("performance")}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
              ${selectedOption === "performance" 
                ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
          >
            <GaugeCircle className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Rendimiento</span>
          </button>
        </div>

        {/* Contenido principal */}
        <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg p-6">
          <h2 className="text-xl font-medium mb-6 text-gray-800 dark:text-white">
            {selectedOption === "general" && "Configuración General"}
            {selectedOption === "notifications" && "Configuración de Notificaciones"}
            {selectedOption === "security" && "Configuración de Seguridad"}
            {selectedOption === "performance" && "Configuración de Rendimiento"}
          </h2>
        </div>
      </main>

      <MobileMenu />
    </div>
  );
};

export default Preferences;
