
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import logoLight from "/lovable-uploads/3c4e209f-eba1-4f56-a526-71797329eba2.png";
import logoDark from "/lovable-uploads/401fd9ed-e5c3-4898-a5fb-f4afc6855ed9.png";
import iconLight from "/lovable-uploads/a28bae4b-b8b3-48dd-bb30-73f20fb73a2c.png";
import iconDark from "/lovable-uploads/b162bd3a-df6e-464f-b894-e47592de98c9.png";

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
        <img 
          src={isDark ? iconDark : iconLight}
          alt="ISISMAWEB Icon"
          className="w-8 h-8 object-contain"
        />
      ) : (
        <img 
          src={isDark ? logoDark : logoLight}
          alt="ISISMAWEB Logo"
          className="w-48 h-12 object-contain"
        />
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
