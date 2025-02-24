
import { Info } from "lucide-react";
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
    const linkContent = (
      <>
        <Icon className={`${isCollapsed ? 'w-8 h-8' : 'w-5 h-5'} transition-all duration-200`} />
        {!isCollapsed && <span className="ml-3">{label}</span>}
      </>
    );

    const content = (
      <Link 
        to={to}
        className={`
          flex items-center ${isCollapsed ? 'justify-center' : ''} px-4 py-3 
          text-[#5799CC] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50
        `}
      >
        {linkContent}
      </Link>
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
    <div className="py-4 border-t border-gray-100 dark:border-gray-800">
      {!isCollapsed && (
        <div className="px-4 py-2 text-sm text-[#5799CC] dark:text-[#6EB8D7]">OPCIONES</div>
      )}
      
      <OptionItem to="/acerca" icon={Info} label="Acerca de" />
    </div>
  );
};
