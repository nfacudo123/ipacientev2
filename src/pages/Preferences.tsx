
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

      <main className={`flex-1 ${isMenuCollapsed ? 'md:ml-[72px]' : 'md:ml-64'} p-4 pt-20 pb-20 md:pb-4 transition-all duration-200 flex`}>
        {/* Segundo menú lateral */}
        <div className="hidden md:block w-64 min-w-[256px] bg-white dark:bg-[hsl(var(--card))] rounded-lg h-fit mr-4 p-4">
          <h3 className="text-sm font-semibold text-[#7E69AB] dark:text-[#9b87f5] mb-4 px-2">CONFIGURACIÓN</h3>
          <div className="space-y-1">
            <button
              onClick={() => setSelectedOption("general")}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors
                ${selectedOption === "general" 
                  ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                  : "text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
            >
              <Settings className="w-5 h-5 mr-3" />
              General
            </button>
            <button
              onClick={() => setSelectedOption("notifications")}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors
                ${selectedOption === "notifications" 
                  ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                  : "text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
            >
              <Mail className="w-5 h-5 mr-3" />
              Notificaciones
            </button>
            <button
              onClick={() => setSelectedOption("security")}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors
                ${selectedOption === "security" 
                  ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                  : "text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
            >
              <Lock className="w-5 h-5 mr-3" />
              Seguridad
            </button>
            <button
              onClick={() => setSelectedOption("performance")}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors
                ${selectedOption === "performance" 
                  ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                  : "text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
            >
              <GaugeCircle className="w-5 h-5 mr-3" />
              Rendimiento
            </button>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))]">
              Preferencias
            </h1>
          </div>

          <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              Selecciona una opción del menú lateral para configurar tus preferencias.
            </p>
          </div>

          <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg p-6">
            <h2 className="text-xl font-medium mb-6 text-gray-800 dark:text-white">
              {selectedOption === "general" && "Configuración General"}
              {selectedOption === "notifications" && "Configuración de Notificaciones"}
              {selectedOption === "security" && "Configuración de Seguridad"}
              {selectedOption === "performance" && "Configuración de Rendimiento"}
            </h2>
          </div>
        </div>
      </main>

      <MobileMenu />
    </div>
  );
};

export default Preferences;
