
import { Home, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarMenuProps {
  isCollapsed: boolean;
}

interface MenuItemProps {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export const SidebarMenu = ({ isCollapsed }: SidebarMenuProps) => {
  const navigate = useNavigate();

  const MenuItem = ({ to, icon: Icon, label }: MenuItemProps) => {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate(to);
    };

    const content = (
      <button
        onClick={handleClick}
        className={`
          w-full flex items-center ${isCollapsed ? 'justify-center' : ''} px-4 py-3
          text-[#5799CC] dark:text-gray-300 hover:bg-[#F8F7FF] hover:text-[#6EB8D7] dark:hover:bg-gray-800/50
        `}
      >
        <Icon className={`${isCollapsed ? 'w-8 h-8' : 'w-5 h-5'} transition-all duration-200`} />
        {!isCollapsed && <span className="ml-3">{label}</span>}
      </button>
    );

    return isCollapsed ? (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            {content}
          </TooltipTrigger>
          <TooltipContent 
            side="right" 
            className="bg-white dark:bg-gray-800 text-sm py-2 px-3 font-medium shadow-lg border border-gray-100 dark:border-gray-700"
          >
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : content;
  };

  return (
    <div className="py-4">
      {!isCollapsed && (
        <div className="px-4 py-2 text-sm text-[#5799CC] dark:text-[#6EB8D7]">MENÚ</div>
      )}
      
      <MenuItem to="/" icon={Home} label="Inicio" />
      <MenuItem to="/mis-citas" icon={Calendar} label="Mis Citas" />
    </div>
  );
};
