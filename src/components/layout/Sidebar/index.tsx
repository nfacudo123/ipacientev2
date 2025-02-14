
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
  return (
    <aside className={`
      w-64 bg-[hsl(var(--card))] shadow-lg fixed inset-y-0 z-30 transition-all duration-300
      md:translate-x-0 md:block md:left-0 flex flex-col
      ${isMobileMenuOpen ? 'translate-x-0 right-0' : 'translate-x-full right-0'}
    `}>
      <div className="flex flex-col h-full">
        <SidebarHeader isDark={isDark} toggleTheme={toggleTheme} />
        <SidebarMenu />
        <SidebarOptions />
        <SidebarFooter />
      </div>
    </aside>
  );
};
