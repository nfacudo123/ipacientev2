
import { Home, Calendar, Info } from "lucide-react";
import { NavLink } from "react-router-dom";

export const MobileMenu = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[hsl(var(--card))] border-t border-gray-100 dark:border-gray-800 z-50">
      <div className="flex justify-around items-center h-16">
        <NavLink 
          to="/" 
          className={({ isActive }) => `flex flex-col items-center text-xs ${
            isActive 
              ? 'text-[#2B4C6B] dark:text-[#95F1E1]' 
              : 'text-[#5799CC] dark:text-[#6EB8D7]'
          }`}
          end
        >
          <Home className="w-6 h-6 mb-1" />
          <span>Inicio</span>
        </NavLink>
        
        <NavLink 
          to="/mis-citas"
          className={({ isActive }) => `flex flex-col items-center text-xs ${
            isActive 
              ? 'text-[#2B4C6B] dark:text-[#95F1E1]' 
              : 'text-[#5799CC] dark:text-[#6EB8D7]'
          }`}
        >
          <Calendar className="w-6 h-6 mb-1" />
          <span>Mis Citas</span>
        </NavLink>
        
        <NavLink 
          to="/acerca"
          className={({ isActive }) => `flex flex-col items-center text-xs ${
            isActive 
              ? 'text-[#2B4C6B] dark:text-[#95F1E1]' 
              : 'text-[#5799CC] dark:text-[#6EB8D7]'
          }`}
        >
          <Info className="w-6 h-6 mb-1" />
          <span>Acerca de</span>
        </NavLink>
      </div>
    </nav>
  );
};
