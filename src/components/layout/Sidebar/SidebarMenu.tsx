
import { Home, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarMenuProps {
  isCollapsed: boolean;
}

export const SidebarMenu = ({ isCollapsed }: SidebarMenuProps) => {
  return (
    <div className="py-4">
      {!isCollapsed && (
        <div className="px-4 py-2 text-sm text-[#7E69AB] dark:text-[#9b87f5]">MENÚ</div>
      )}
      
      <Link to="/" className="flex items-center px-4 py-3 text-[#9b87f5] bg-[#F8F7FF] dark:bg-gray-800/50">
        <Home className="w-5 h-5 min-w-[20px]" />
        {!isCollapsed && <span className="ml-3">Inicio</span>}
      </Link>
      
      <Link to="/mis-citas" className="flex items-center px-4 py-3 text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50">
        <Calendar className="w-5 h-5 min-w-[20px]" />
        {!isCollapsed && <span className="ml-3">Mis Citas</span>}
      </Link>
    </div>
  );
};
