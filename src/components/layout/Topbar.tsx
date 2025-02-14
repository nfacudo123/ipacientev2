
import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface TopbarProps {
  isDark: boolean;
}

export const Topbar = ({ isDark }: TopbarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[hsl(var(--card))] shadow-sm z-10 md:ml-64">
      <div className="flex justify-end items-center h-16 px-4">
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-[#9b87f5] transition-colors" />
          <Settings className="w-6 h-6 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-[#9b87f5] transition-colors" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d" alt="Doctor" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/mis-datos" className="cursor-pointer">
                  Mis Datos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/preferencias" className="cursor-pointer">
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
