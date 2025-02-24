
import { useTheme } from "next-themes";
import { Sun, Moon, Building2 } from "lucide-react";

interface SidebarHeaderProps {
  isCollapsed: boolean;
  isDark: boolean;
}

export const SidebarHeader = ({ isCollapsed, isDark }: SidebarHeaderProps) => {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
      {isCollapsed ? (
        <Building2 
          className={`w-8 h-8 ${isDark ? 'text-[#6EB8D7]' : 'text-[#5799CC]'}`}
        />
      ) : (
        <div className="flex items-center">
          <Building2 
            className={`w-8 h-8 mr-2 ${isDark ? 'text-[#6EB8D7]' : 'text-[#5799CC]'}`}
          />
          <span className={`text-xl font-bold ${isDark ? 'text-[#6EB8D7]' : 'text-[#5799CC]'}`}>
            ISISMAWEB
          </span>
        </div>
      )}
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
