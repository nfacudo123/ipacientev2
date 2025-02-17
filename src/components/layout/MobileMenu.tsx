
import { Home, Calendar, Info, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const MobileMenu = () => {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[hsl(var(--card))] border-t border-gray-100 dark:border-gray-800 z-50">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/" 
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/' 
              ? 'text-[#4285F4]' 
              : 'text-[#7E69AB] dark:text-gray-300'
          }`}
        >
          <Home className="w-6 h-6 mb-1" />
          <span>Inicio</span>
        </Link>
        
        <Link 
          to="/mis-citas" 
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/mis-citas' 
              ? 'text-[#4285F4]' 
              : 'text-[#7E69AB] dark:text-gray-300'
          }`}
        >
          <Calendar className="w-6 h-6 mb-1" />
          <span>Mis Citas</span>
        </Link>
        
        <Link 
          to="/acerca-de" 
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/acerca-de' 
              ? 'text-[#4285F4]' 
              : 'text-[#7E69AB] dark:text-gray-300'
          }`}
        >
          <Info className="w-6 h-6 mb-1" />
          <span>Acerca de</span>
        </Link>
        
        <Link 
          to="/login" 
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/login' 
              ? 'text-[#4285F4]' 
              : 'text-[#7E69AB] dark:text-gray-300'
          }`}
        >
          <LogOut className="w-6 h-6 mb-1" />
          <span>Cerrar sesión</span>
        </Link>
      </div>
    </nav>
  );
};
