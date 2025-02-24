import { Sun, Moon, User, Settings, LogOut, BellRing } from "lucide-react";
import { useTheme } from "next-themes";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavLink } from "react-router-dom";
import iconLight from "/lovable-uploads/a28bae4b-b8b3-48dd-bb30-73f20fb73a2c.png";
import iconDark from "/lovable-uploads/b162bd3a-df6e-464f-b894-e47592de98c9.png";

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

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-[hsl(var(--card))] shadow-sm z-40 p-4">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img 
            src={isDark ? iconDark : iconLight}
            alt="ISISMAWEB Icon"
            className="w-8 h-8 object-contain"
          />
        </NavLink>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-[#F8F7FF] dark:hover:bg-[#5799CC]/20 rounded-lg transition-colors"
            aria-label="Cambiar tema"
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-[#6EB8D7]" />
            ) : (
              <Sun className="w-5 h-5 text-[#5799CC]" />
            )}
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative inline-flex items-center p-2 hover:bg-[#F8F7FF] dark:hover:bg-[#5799CC]/20 rounded-lg transition-colors">
                <BellRing className="w-5 h-5 text-[#5799CC] dark:text-[#6EB8D7] hover:text-[#2B4C6B] transition-colors" />
                <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full">
                  2
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[100vw] -right-4 bg-white dark:bg-[#2B4C6B] border-x-0 border-t border-b border-gray-100 dark:border-[#5799CC]">
              <div className="px-4 py-3 font-medium text-[#2B4C6B] dark:text-[#95F1E1]">
                Notificaciones
              </div>
              <DropdownMenuSeparator className="bg-[#5799CC]/20 dark:bg-[#6EB8D7]/20" />
              <div className="max-h-[50vh] overflow-auto">
                <DropdownMenuItem className="p-3 focus:bg-[#F8F7FF] dark:focus:bg-[#5799CC]/20 group">
                  <div className="space-y-2 w-full">
                    <div className="flex items-start gap-2">
                      <BellRing className="w-4 h-4 text-[#5799CC] dark:text-[#6EB8D7] mt-0.5 animate-pulse" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-[#2B4C6B] dark:text-[#95F1E1]">
                          Cita Julio 11 a las 11:00 am
                        </p>
                        <p className="text-xs text-[#5799CC] dark:text-[#6EB8D7]">
                          Tienes cita con: Dr. Santiago Franco
                        </p>
                        <p className="text-xs text-[#5799CC] dark:text-[#6EB8D7]">
                          Control por Medicina General
                        </p>
                        <p className="text-xs font-medium text-red-500 mt-1">
                          Ya faltan 25 minutos para tu cita!!
                        </p>
                      </div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <hr className="border-t border-[#5799CC]/20 dark:border-[#6EB8D7]/20" />
                <DropdownMenuItem className="p-3 focus:bg-[#F8F7FF] dark:focus:bg-[#5799CC]/20 group">
                  <div className="space-y-2 w-full">
                    <div className="flex items-start gap-2">
                      <BellRing className="w-4 h-4 text-[#5799CC] dark:text-[#6EB8D7] mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-[#2B4C6B] dark:text-[#95F1E1]">
                          Cita Julio 11 a las 11:00 am
                        </p>
                        <p className="text-xs text-[#5799CC] dark:text-[#6EB8D7]">
                          Tienes cita con: Dr. Santiago Franco
                        </p>
                        <p className="text-xs text-[#5799CC] dark:text-[#6EB8D7]">
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
            <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-[#2B4C6B] border border-gray-100 dark:border-[#5799CC]">
              <DropdownMenuItem 
                className="text-[#5799CC] dark:text-[#6EB8D7] hover:text-[#2B4C6B] dark:hover:text-[#95F1E1] focus:text-[#2B4C6B] dark:focus:text-[#95F1E1] focus:bg-[#F8F7FF] dark:focus:bg-[#5799CC]/20"
                onSelect={() => navigate('/profile')}
              >
                <User className="w-4 h-4 mr-2" />
                Mis Datos
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-[#5799CC] dark:text-[#6EB8D7] hover:text-[#2B4C6B] dark:hover:text-[#95F1E1] focus:text-[#2B4C6B] dark:focus:text-[#95F1E1] focus:bg-[#F8F7FF] dark:focus:bg-[#5799CC]/20"
                onSelect={() => navigate('/preferencias')}
              >
                <Settings className="w-4 h-4 mr-2" />
                Preferencias
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#5799CC]/20 dark:bg-[#6EB8D7]/20" />
              <DropdownMenuItem 
                className="text-[#5799CC] dark:text-[#6EB8D7] hover:text-[#2B4C6B] dark:hover:text-[#95F1E1] focus:text-[#2B4C6B] dark:focus:text-[#95F1E1] focus:bg-[#F8F7FF] dark:focus:bg-[#5799CC]/20"
                onSelect={() => navigate('/login')}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
