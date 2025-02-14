
import { Bell, Home, User, Calendar, Settings, Info, LogOut, Menu, Stethoscope, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="min-h-screen flex w-full bg-[#F8F7FF]">
      {/* Sidebar */}
      <aside className={`
        w-64 bg-white shadow-lg fixed inset-y-0 z-30 transition-transform duration-300
        md:translate-x-0 md:block md:left-0
        ${isMobileMenuOpen ? 'translate-x-0 right-0' : 'translate-x-full right-0'}
      `}>
        <div className="p-4 border-b flex items-center justify-between">
          <Stethoscope className="w-8 h-8 text-[#9b87f5]" />
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-gray-600" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </button>
        </div>
        
        <div className="py-4">
          <div className="px-4 py-2 text-sm text-[#7E69AB]">MENÚ</div>
          
          <Link to="/" className="flex items-center px-4 py-3 text-[#9b87f5] bg-[#F8F7FF]">
            <Home className="w-5 h-5 mr-3" />
            <span>Inicio</span>
          </Link>
          
          <Link to="/mis-datos" className="flex items-center px-4 py-3 text-[#7E69AB] hover:bg-[#F8F7FF]">
            <User className="w-5 h-5 mr-3" />
            <span>Mis Datos</span>
          </Link>
          
          <Link to="/mis-citas" className="flex items-center px-4 py-3 text-[#7E69AB] hover:bg-[#F8F7FF]">
            <Calendar className="w-5 h-5 mr-3" />
            <span>Mis Citas</span>
          </Link>
        </div>
        
        <div className="py-4 border-t border-gray-100">
          <div className="px-4 py-2 text-sm text-[#7E69AB]">OPCIONES</div>
          
          <Link to="/preferencias" className="flex items-center px-4 py-3 text-[#7E69AB] hover:bg-[#F8F7FF]">
            <Settings className="w-5 h-5 mr-3" />
            <span>Preferencias</span>
          </Link>
          
          <Link to="/acerca-de" className="flex items-center px-4 py-3 text-[#7E69AB] hover:bg-[#F8F7FF]">
            <Info className="w-5 h-5 mr-3" />
            <span>Acerca de</span>
          </Link>
          
          <Link to="/login" className="flex items-center px-4 py-3 text-[#7E69AB] hover:bg-[#F8F7FF]">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Cerrar sesión</span>
          </Link>
        </div>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-10 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Stethoscope className="w-8 h-8 text-[#9b87f5]" />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-gray-500" />
            <Settings className="w-6 h-6 text-gray-500" />
            <button 
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 pt-20 md:pt-4">
        {/* Welcome Message */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Bienvenido paciente Juan Pérez</h1>
          <p className="text-gray-600">juan.perez@ejemplo.com</p>
        </div>

        {/* Header Banner */}
        <div className="w-full h-[300px] bg-gray-200 rounded-xl mb-6">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
            alt="Doctor en consulta" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Info Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Personal Info" 
              className="w-full h-[200px] object-cover"
            />
            <div className="p-6 bg-[#FF1493]">
              <p className="text-white text-lg font-medium">
                Revisa y actualiza tu información personal
              </p>
            </div>
          </div>

          {/* Appointments Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Appointments" 
              className="w-full h-[200px] object-cover"
            />
            <div className="p-6 bg-[#0066CC]">
              <p className="text-white text-lg font-medium">
                Ver tus citas programadas y completadas
              </p>
            </div>
          </div>

          {/* Health Blog Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Health Blog" 
              className="w-full h-[200px] object-cover"
            />
            <div className="p-6 bg-[#FF4500]">
              <p className="text-white text-lg font-medium">
                Mantente actualizado con nuestro blog de salud
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
