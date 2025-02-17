
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { Topbar } from "@/components/layout/Topbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ChevronRight, Lock, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

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
            Acerca de
          </h1>
        </div>

        <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg p-6">
          <div className="space-y-4">
            <Link
              to="/politicas-privacidad"
              className="flex items-center justify-between w-full p-4 text-left rounded-lg bg-card hover:bg-muted/50 border border-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#F8F7FF] dark:bg-gray-800">
                  <FileText className="w-5 h-5 text-[#9b87f5]" />
                </div>
                <span className="text-lg font-medium">Políticas de privacidad</span>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>

            <Link
              to="/consentimiento-informado"
              className="flex items-center justify-between w-full p-4 text-left rounded-lg bg-card hover:bg-muted/50 border border-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#F8F7FF] dark:bg-gray-800">
                  <Lock className="w-5 h-5 text-[#9b87f5]" />
                </div>
                <span className="text-lg font-medium">Consentimiento informado</span>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>

            <Link
              to="/nosotros"
              className="flex items-center justify-between w-full p-4 text-left rounded-lg bg-card hover:bg-muted/50 border border-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#F8F7FF] dark:bg-gray-800">
                  <Users className="w-5 h-5 text-[#9b87f5]" />
                </div>
                <span className="text-lg font-medium">Nosotros</span>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-between p-4 rounded-lg bg-card border border-border">
            <span className="text-lg font-medium">Versión</span>
            <span className="text-sm text-muted-foreground">2.0</span>
          </div>
        </div>
      </main>

      <MobileMenu />
    </div>
  );
};

export default About;
