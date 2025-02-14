
import { Home, Search, List, ShoppingCart, User } from "lucide-react";
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
              ? 'text-[#9b87f5]' 
              : 'text-[#7E69AB] dark:text-gray-300'
          }`}
        >
          <Home className="w-6 h-6 mb-1" />
          <span>Inicio</span>
        </Link>
        
        <Link 
          to="/buscar" 
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/buscar' 
              ? 'text-[#9b87f5]' 
              : 'text-[#7E69AB] dark:text-gray-300'
          }`}
        >
          <Search className="w-6 h-6 mb-1" />
          <span>Buscar</span>
        </Link>
        
        <Link 
          to="/categorias" 
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/categorias' 
              ? 'text-[#9b87f5]' 
              : 'text-[#7E69AB] dark:text-gray-300'
          }`}
        >
          <List className="w-6 h-6 mb-1" />
          <span>Categorías</span>
        </Link>
        
        <Link 
          to="/carrito" 
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/carrito' 
              ? 'text-[#9b87f5]' 
              : 'text-[#7E69AB] dark:text-gray-300'
          }`}
        >
          <ShoppingCart className="w-6 h-6 mb-1" />
          <span>Carrito</span>
        </Link>
        
        <Link 
          to="/cuenta" 
          className={`flex flex-col items-center text-xs ${
            location.pathname === '/cuenta' 
              ? 'text-[#9b87f5]' 
              : 'text-[#7E69AB] dark:text-gray-300'
          }`}
        >
          <User className="w-6 h-6 mb-1" />
          <span>Cuenta</span>
        </Link>
      </div>
    </nav>
  );
};
