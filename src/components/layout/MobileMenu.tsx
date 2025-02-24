
import { Home, Calendar, Info } from "lucide-react";
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
              ? 'text-[#2B4C6B] dark:text-[#95F1E1]' 
              : 'text-[#5799CC] dark:text-[#6EB8D7]'
          }`}
        >
          <Home className="w-6 h-6 mb-1" />
          <span>Inicio</span>
        </Link>
        
        <Link 
          to="/mis-citas" 
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/mis-citas' 
              ? 'text-[#2B4C6B] dark:text-[#95F1E1]' 
              : 'text-[#5799CC] dark:text-[#6EB8D7]'
          }`}
        >
          <Calendar className="w-6 h-6 mb-1" />
          <span>Mis Citas</span>
        </Link>
        
        <Link 
          to="/acerca" 
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/acerca' 
              ? 'text-[#2B4C6B] dark:text-[#95F1E1]' 
              : 'text-[#5799CC] dark:text-[#6EB8D7]'
          }`}
        >
          <Info className="w-6 h-6 mb-1" />
          <span>Acerca de</span>
        </Link>
      </div>
    </nav>
  );
};
