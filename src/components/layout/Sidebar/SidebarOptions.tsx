
import { Settings, Info, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export const SidebarOptions = () => {
  return (
    <div className="py-4 border-t border-gray-100 dark:border-gray-800">
      <div className="px-4 py-2 text-sm text-[#7E69AB] dark:text-[#9b87f5]">OPCIONES</div>
      
      <Link to="/preferencias" className="flex items-center px-4 py-3 text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50">
        <Settings className="w-5 h-5 mr-3" />
        <span>Preferencias</span>
      </Link>
      
      <Link to="/acerca-de" className="flex items-center px-4 py-3 text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50">
        <Info className="w-5 h-5 mr-3" />
        <span>Acerca de</span>
      </Link>
      
      <Link to="/login" className="flex items-center px-4 py-3 text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50">
        <LogOut className="w-5 h-5 mr-3" />
        <span>Cerrar sesión</span>
      </Link>
    </div>
  );
};
