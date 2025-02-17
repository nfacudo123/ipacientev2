
import { useTheme } from "next-themes";

interface SidebarHeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  isCollapsed: boolean;
}

export const SidebarHeader = ({ isDark, toggleTheme, isCollapsed }: SidebarHeaderProps) => {
  return (
    <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
      <img 
        src={isDark ? "/lovable-uploads/0556f409-35a9-43e5-aaf2-52249b735899.png" : "/lovable-uploads/1685d97b-8505-4da0-a24e-c67e0ae010c0.png"}
        alt="ISISMAWEB Logo"
        className={`transition-all duration-200 ${isCollapsed ? 'w-8 h-8' : 'w-32 h-8'} object-contain`}
      />
      {!isCollapsed && (
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-500" />
          )}
        </button>
      )}
    </div>
  );
};
