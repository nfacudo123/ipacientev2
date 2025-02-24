
import { Sun, Moon, User, Settings, LogOut, BellRing } from "lucide-react";
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
              <button className="relative inline-flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <BellRing className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-[#9b87f5] transition-colors" />
                <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full">
                  2
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[100vw] -right-4 bg-[hsl(var(--card))] border-x-0 border-t border-b border-gray-100 dark:border-gray-800">
              <div className="px-4 py-3 font-medium text-[#7E69AB] dark:text-gray-300">
                Notificaciones
              </div>
              <DropdownMenuSeparator className="bg-gray-100 dark:bg-gray-800" />
              <div className="max-h-[50vh] overflow-auto">
                <DropdownMenuItem className="p-3 focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50 group">
                  <div className="space-y-2 w-full">
                    <div className="flex items-start gap-2">
                      <BellRing className="w-4 h-4 text-[#9b87f5] mt-0.5 animate-pulse" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800 dark:text-gray-200">
                          Cita Julio 11 a las 11:00 am
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Tienes cita con: Dr. Santiago Franco
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Control por Medicina General
                        </p>
                        <p className="text-xs font-medium text-red-500 mt-1">
                          Ya faltan 25 minutos para tu cita!!
                        </p>
                      </div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <hr className="border-t border-gray-100 dark:border-gray-800 group-hover:border-[#9b87f5]/30 transition-colors" />
                <DropdownMenuItem className="p-3 focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50 group">
                  <div className="space-y-2 w-full">
                    <div className="flex items-start gap-2">
                      <BellRing className="w-4 h-4 text-[#9b87f5] mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800 dark:text-gray-200">
                          Cita Julio 11 a las 11:00 am
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Tienes cita con: Dr. Santiago Franco
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Control por Medicina General
                        </p>
                      </div>
                    </div>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

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
