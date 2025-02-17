
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

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
          src={isDark ? "/lovable-uploads/b162bd3a-df6e-464f-b894-e47592de98c9.png" : "/lovable-uploads/a28bae4b-b8b3-48dd-bb30-73f20fb73a2c.png"}
          alt="ISISMAWEB Icon"
          className="w-8 h-8 object-contain"
        />
      ) : (
        <img 
          src={isDark ? "/lovable-uploads/0556f409-35a9-43e5-aaf2-52249b735899.png" : "/lovable-uploads/1685d97b-8505-4da0-a24e-c67e0ae010c0.png"}
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
