
import { Bell, Settings, Menu, Stethoscope } from "lucide-react";

interface MobileHeaderProps {
  toggleMobileMenu: () => void;
}

export const MobileHeader = ({ toggleMobileMenu }: MobileHeaderProps) => {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-[hsl(var(--card))] shadow-sm z-10 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Stethoscope className="w-8 h-8 text-[#9b87f5]" />
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <Settings className="w-6 h-6 text-gray-500 dark:text-gray-400" />
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
