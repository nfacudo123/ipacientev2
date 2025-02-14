
import { Bell, Home, User, Calendar, Settings, Info, LogOut, Menu, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex w-full bg-[#F8F7FF]">
      {/* Sidebar */}
      <aside className={`
        w-64 bg-white shadow-lg fixed h-full z-30 transition-transform duration-300
        md:translate-x-0 md:block right-0
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-4 border-b flex items-center space-x-3">
          <img src="/placeholder.svg" alt="Logo" className="h-8" />
          <Stethoscope className="w-6 h-6 text-[#0066CC]" />
        </div>
        
        <div className="py-4">
          <div className="px-4 py-2 text-sm text-gray-500">MENÚ</div>
          
          <Link to="/" className="flex items-center px-4 py-3 text-blue-600 bg-blue-50">
            <Home className="w-5 h-5 mr-3" />
            <span>Inicio</span>
          </Link>
          
          <Link to="/mis-datos" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
            <User className="w-5 h-5 mr-3" />
            <span>Mis Datos</span>
          </Link>
          
          <Link to="/mis-citas" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
            <Calendar className="w-5 h-5 mr-3" />
            <span>Mis Citas</span>
          </Link>
        </div>
        
        <div className="py-4 border-t">
          <div className="px-4 py-2 text-sm text-gray-500">OPCIONES</div>
          
          <Link to="/preferencias" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
            <Settings className="w-5 h-5 mr-3" />
            <span>Preferencias</span>
          </Link>
          
          <Link to="/acerca-de" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
            <Info className="w-5 h-5 mr-3" />
            <span>Acerca de</span>
          </Link>
          
          <Link to="/login" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
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
          <div className="flex items-center space-x-3">
            <img src="/placeholder.svg" alt="Logo" className="h-8" />
            <Stethoscope className="w-6 h-6 text-[#0066CC]" />
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
      <main className="flex-1 md:ml-0 md:mr-64 p-4 pt-20 md:pt-4">
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
