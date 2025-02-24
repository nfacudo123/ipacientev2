
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { Topbar } from "@/components/layout/Topbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { FileText, Lock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
          <h1 className="text-2xl font-bold text-[#2B4C6B] dark:text-[#6EB8D7]">
            Acerca de
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link
            to="/politicas-privacidad"
            className="flex flex-col items-center justify-center p-4 rounded-lg transition-colors bg-white dark:bg-[hsl(var(--card))] text-[#5799CC] dark:text-[#6EB8D7] hover:bg-[#F8F7FF] dark:hover:bg-[#2B4C6B]/50"
          >
            <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-lg bg-[#F8F7FF] dark:bg-[#2B4C6B]">
              <FileText className="w-6 h-6 text-[#5799CC] dark:text-[#6EB8D7]" />
            </div>
            <span className="text-sm font-medium">Políticas de privacidad</span>
          </Link>

          <Link
            to="/consentimiento-informado"
            className="flex flex-col items-center justify-center p-4 rounded-lg transition-colors bg-white dark:bg-[hsl(var(--card))] text-[#5799CC] dark:text-[#6EB8D7] hover:bg-[#F8F7FF] dark:hover:bg-[#2B4C6B]/50"
          >
            <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-lg bg-[#F8F7FF] dark:bg-[#2B4C6B]">
              <Lock className="w-6 h-6 text-[#5799CC] dark:text-[#6EB8D7]" />
            </div>
            <span className="text-sm font-medium">Consentimiento informado</span>
          </Link>

          <Link
            to="/nosotros"
            className="flex flex-col items-center justify-center p-4 rounded-lg transition-colors bg-white dark:bg-[hsl(var(--card))] text-[#5799CC] dark:text-[#6EB8D7] hover:bg-[#F8F7FF] dark:hover:bg-[#2B4C6B]/50"
          >
            <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-lg bg-[#F8F7FF] dark:bg-[#2B4C6B]">
              <Users className="w-6 h-6 text-[#5799CC] dark:text-[#6EB8D7]" />
            </div>
            <span className="text-sm font-medium">Nosotros</span>
          </Link>
        </div>

        <div className="mt-6 bg-white dark:bg-[hsl(var(--card))] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-[#2B4C6B] dark:text-[#6EB8D7]">Versión</span>
            <span className="text-sm text-[#5799CC] dark:text-[#95F1E1]">2.0</span>
          </div>
        </div>
      </main>

      <MobileMenu />
    </div>
  );
};

export default About;
