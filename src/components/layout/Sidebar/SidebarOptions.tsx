
import { Settings, Info, LogOut, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

export const SidebarOptions = () => {
  return (
    <div className="py-4 border-t border-gray-100 dark:border-gray-800 flex flex-col justify-between h-full">
      <div>
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

      {/* Company name as menu footer */}
      <div className="mt-auto border-t border-gray-100 dark:border-gray-800 p-4">
        <div className="flex items-center space-x-3">
          <Stethoscope className="w-8 h-8 text-[#9b87f5]" />
          <div>
            <p className="text-sm font-medium text-[#7E69AB] dark:text-gray-300">
              Nombre de la Empresa
            </p>
            <p className="text-xs text-[#7E69AB] dark:text-gray-400">
              Versión 1.0.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
