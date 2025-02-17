
import { Info, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarOptionsProps {
  isCollapsed: boolean;
}

export const SidebarOptions = ({ isCollapsed }: SidebarOptionsProps) => {
  const OptionItem = ({ to, icon: Icon, label }) => {
    const content = (
      <Link 
        to={to} 
        className="flex items-center px-4 py-3 text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"
      >
        <Icon className="w-5 h-5 min-w-[20px]" />
        {!isCollapsed && <span className="ml-3">{label}</span>}
      </Link>
    );

    return isCollapsed ? (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {content}
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-white dark:bg-gray-800 text-sm">
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : content;
  };

  return (
    <div className="py-4 border-t border-gray-100 dark:border-gray-800">
      {!isCollapsed && (
        <div className="px-4 py-2 text-sm text-[#7E69AB] dark:text-[#9b87f5]">OPCIONES</div>
      )}
      
      <OptionItem to="/acerca-de" icon={Info} label="Acerca de" />
      <OptionItem to="/login" icon={LogOut} label="Cerrar sesión" />
    </div>
  );
};
