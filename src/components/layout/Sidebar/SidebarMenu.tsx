
import { Home, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarMenuProps {
  isCollapsed: boolean;
}

export const SidebarMenu = ({ isCollapsed }: SidebarMenuProps) => {
  const MenuItem = ({ to, icon: Icon, label, isActive = false }) => {
    const content = (
      <Link 
        to={to} 
        className={`flex items-center px-4 py-3 ${
          isActive 
            ? 'text-[#9b87f5] bg-[#F8F7FF] dark:bg-gray-800/50' 
            : 'text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50'
        }`}
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
    <div className="py-4">
      {!isCollapsed && (
        <div className="px-4 py-2 text-sm text-[#7E69AB] dark:text-[#9b87f5]">MENÚ</div>
      )}
      
      <MenuItem to="/" icon={Home} label="Inicio" isActive={true} />
      <MenuItem to="/mis-citas" icon={Calendar} label="Mis Citas" />
    </div>
  );
};
