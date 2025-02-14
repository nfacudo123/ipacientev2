
import { Home, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const SidebarMenu = () => {
  return (
    <div className="py-4">
      <div className="px-4 py-2 text-sm text-[#7E69AB] dark:text-[#9b87f5]">MENÚ</div>
      
      <Link to="/" className="flex items-center px-4 py-3 text-[#9b87f5] bg-[#F8F7FF] dark:bg-gray-800/50">
        <Home className="w-5 h-5 mr-3" />
        <span>Inicio</span>
      </Link>
      
      <Link to="/mis-datos" className="flex items-center px-4 py-3 text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50">
        <User className="w-5 h-5 mr-3" />
        <span>Mis Datos</span>
      </Link>
      
      <Link to="/mis-citas" className="flex items-center px-4 py-3 text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50">
        <Calendar className="w-5 h-5 mr-3" />
        <span>Mis Citas</span>
      </Link>
    </div>
  );
};
