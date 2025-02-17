
import { Info, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarOptionsProps {
  isCollapsed: boolean;
}

export const SidebarOptions = ({ isCollapsed }: SidebarOptionsProps) => {
  return (
    <div className="py-4 border-t border-gray-100 dark:border-gray-800">
      {!isCollapsed && (
        <div className="px-4 py-2 text-sm text-[#7E69AB] dark:text-[#9b87f5]">OPCIONES</div>
      )}
      
      <Link to="/acerca-de" className="flex items-center px-4 py-3 text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50">
        <Info className="w-5 h-5 min-w-[20px]" />
        {!isCollapsed && <span className="ml-3">Acerca de</span>}
      </Link>
      
      <Link to="/login" className="flex items-center px-4 py-3 text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50">
        <LogOut className="w-5 h-5 min-w-[20px]" />
        {!isCollapsed && <span className="ml-3">Cerrar sesión</span>}
      </Link>
    </div>
  );
};
