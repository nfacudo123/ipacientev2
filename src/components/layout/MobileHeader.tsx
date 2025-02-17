
import { Sun, Moon, User, Settings, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";

interface MobileHeaderProps {
  toggleMobileMenu: () => void;
}

export const MobileHeader = ({ toggleMobileMenu }: MobileHeaderProps) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleLogout = () => {
    navigate('/login');
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d" alt="Doctor" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-[hsl(var(--card))] border border-gray-100 dark:border-gray-800">
              <DropdownMenuItem asChild className="focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50">
                <Link to="/profile" className="w-full text-[#7E69AB] dark:text-gray-300 cursor-pointer flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Mis Datos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50">
                <Link to="/preferencias" className="w-full text-[#7E69AB] dark:text-gray-300 cursor-pointer flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Preferencias
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-100 dark:bg-gray-800" />
              <DropdownMenuItem 
                onClick={handleLogout}
                className="focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50 text-[#7E69AB] dark:text-gray-300 cursor-pointer flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
