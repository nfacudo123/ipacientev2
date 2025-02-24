
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarFooter } from "./SidebarFooter";
import { useTheme } from "next-themes";

interface SidebarProps {
  isMobileMenuOpen: boolean;
  onCollapseChange: (collapsed: boolean) => void;
}

export const Sidebar = ({ isMobileMenuOpen, onCollapseChange }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    onCollapseChange(!isCollapsed);
  };

  return (
    <aside className={`
      ${isCollapsed ? 'w-[72px]' : 'w-64'} bg-[hsl(var(--card))] shadow-lg fixed inset-y-0 z-30 transition-all duration-200
      md:translate-x-0 md:block md:left-0 flex flex-col
      ${isMobileMenuOpen ? 'translate-x-0 right-0' : 'translate-x-full right-0'}
    `}>
      <div className="flex flex-col h-full">
        <SidebarHeader isDark={isDark} isCollapsed={isCollapsed} />
        <SidebarMenu isCollapsed={isCollapsed} />
        <SidebarFooter isCollapsed={isCollapsed} isDark={isDark} />
        
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
