
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarOptions } from "./SidebarOptions";
import { SidebarFooter } from "./SidebarFooter";

interface SidebarProps {
  isDark: boolean;
  toggleTheme: () => void;
  isMobileMenuOpen: boolean;
}

export const Sidebar = ({ isDark, toggleTheme, isMobileMenuOpen }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`
      ${isCollapsed ? 'w-20' : 'w-64'} bg-[hsl(var(--card))] shadow-lg fixed inset-y-0 z-30 transition-all duration-300
      md:translate-x-0 md:block md:left-0 flex flex-col
      ${isMobileMenuOpen ? 'translate-x-0 right-0' : 'translate-x-full right-0'}
    `}>
      <div className="flex flex-col h-full">
        <SidebarHeader isDark={isDark} toggleTheme={toggleTheme} isCollapsed={isCollapsed} />
        <SidebarMenu isCollapsed={isCollapsed} />
        <SidebarOptions isCollapsed={isCollapsed} />
        <SidebarFooter />
        
        <button 
          onClick={toggleCollapse}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-[hsl(var(--card))] rounded-full p-1.5 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 hidden md:block"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>
    </aside>
  );
};
