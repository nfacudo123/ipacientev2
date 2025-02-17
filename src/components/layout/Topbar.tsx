
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { User, Settings } from "lucide-react";

interface TopbarProps {
  isDark: boolean;
  isMenuCollapsed?: boolean;
}

export const Topbar = ({ isDark, isMenuCollapsed }: TopbarProps) => {
  return (
    <div className={`fixed top-0 right-0 bg-[hsl(var(--card))] shadow-sm z-10 transition-all duration-200 ${isMenuCollapsed ? 'md:left-[72px]' : 'md:left-64'}`}>
      <div className="flex justify-end items-center h-16 px-4">
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-[#9b87f5] transition-colors" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d" alt="Doctor" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-[hsl(var(--card))] border border-gray-100 dark:border-gray-800">
              <DropdownMenuItem asChild className="focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50">
                <Link to="/mis-datos" className="w-full text-[#7E69AB] dark:text-gray-300 cursor-pointer flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Mis Datos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-100 dark:bg-gray-800" />
              <DropdownMenuItem asChild className="focus:bg-[#F8F7FF] dark:focus:bg-gray-800/50">
                <Link to="/preferencias" className="w-full text-[#7E69AB] dark:text-gray-300 cursor-pointer flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Preferencias
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
