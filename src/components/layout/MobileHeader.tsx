
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

interface MobileHeaderProps {
  toggleMobileMenu: () => void;
}

export const MobileHeader = ({ toggleMobileMenu }: MobileHeaderProps) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-[hsl(var(--card))] shadow-sm z-40 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={isDark ? "/lovable-uploads/b162bd3a-df6e-464f-b894-e47592de98c9.png" : "/lovable-uploads/a28bae4b-b8b3-48dd-bb30-73f20fb73a2c.png"}
            alt="ISISMAWEB Icon"
            className="w-8 h-8 object-contain"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Cambiar tema"
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </button>
          <button 
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
