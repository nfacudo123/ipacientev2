
import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
