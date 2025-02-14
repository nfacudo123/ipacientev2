
import { Stethoscope, Sun, Moon } from "lucide-react";

interface SidebarHeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const SidebarHeader = ({ isDark, toggleTheme }: SidebarHeaderProps) => {
  return (
    <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
      <Stethoscope className="w-8 h-8 text-[#9b87f5]" />
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
    </div>
  );
};
