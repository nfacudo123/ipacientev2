
import { BellRing, User, Settings, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";

interface TopbarProps {
  isMenuCollapsed?: boolean;
}

export const Topbar = ({ isMenuCollapsed }: TopbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className={`fixed top-0 right-0 bg-[hsl(var(--card))] shadow-sm z-10 transition-all duration-200 ${isMenuCollapsed ? 'md:left-[72px]' : 'md:left-64'} left-0`}>
      <div className="flex justify-end items-center h-16 px-4">
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative inline-flex items-center">
                <BellRing className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 hover:text-[#9b87f5] transition-colors animate-pulse" />
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs font-bold text-white bg-red-500 rounded-full">
                  2
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[calc(100vw-32px)] sm:w-80 bg-[hsl(var(--card))] border border-gray-100 dark:border-gray-800">
              <div className="px-4 py-3 font-medium text-[#7E69AB] dark:text-gray-300">
                Notificaciones
              </div>
              <DropdownMenuSeparator className="bg-gray-100 dark:bg-gray-800" />
              <div className="max-h-[50vh] sm:max-h-[300px] overflow-auto">
                <DropdownMenuItem className="p-3 sm:p-4 focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50 group">
                  <div className="space-y-2 w-full">
                    <div className="flex items-start gap-2">
                      <BellRing className="w-4 h-4 sm:w-5 sm:h-5 text-[#9b87f5] mt-0.5 animate-pulse" />
                      <div className="flex-1">
                        <p className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">
                          Cita Julio 11 a las 11:00 am
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          Tienes cita con: Dr. Santiago Franco
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          Control por Medicina General
                        </p>
                        <p className="text-xs sm:text-sm font-medium text-red-500 mt-1">
                          Ya faltan 25 minutos para tu cita!!
                        </p>
                      </div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <hr className="border-t border-gray-100 dark:border-gray-800 group-hover:border-[#9b87f5]/30 transition-colors" />
                <DropdownMenuItem className="p-3 sm:p-4 focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50 group">
                  <div className="space-y-2 w-full">
                    <div className="flex items-start gap-2">
                      <BellRing className="w-4 h-4 sm:w-5 sm:h-5 text-[#9b87f5] mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">
                          Cita Julio 11 a las 11:00 am
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          Tienes cita con: Dr. Santiago Franco
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
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
                <Link to="/profile" className="w-full text-[#7E69AB] dark:text-gray-300 cursor-pointer flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Mis Datos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50">
                <Link to="/preferencias" className="w-full text-[#7E69AB] dark:text-gray-300 cursor-pointer flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Preferencias
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-100 dark:bg-gray-800" />
              <DropdownMenuItem 
                onClick={handleLogout}
                className="focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50 text-[#7E69AB] dark:text-gray-300 cursor-pointer flex items-center"
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
