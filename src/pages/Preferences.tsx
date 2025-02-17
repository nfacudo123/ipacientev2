import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { Topbar } from "@/components/layout/Topbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Settings, Mail, Lock, GaugeCircle, Camera, Upload, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Preferences = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState("general");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
    <div className="min-h-screen flex w-full bg-[hsl(var(--background))] transition-colors duration-200">
      <Sidebar 
        isDark={isDark}
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        onCollapseChange={setIsMenuCollapsed}
      />

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      <MobileHeader toggleMobileMenu={toggleMobileMenu} />
      <Topbar isDark={isDark} isMenuCollapsed={isMenuCollapsed} />

      <main className={`flex-1 ${isMenuCollapsed ? 'md:ml-[72px]' : 'md:ml-64'} p-4 pt-20 pb-20 md:pb-4 transition-all duration-200`}>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))]">
            Preferencias
          </h1>
        </div>

        {/* Menú horizontal en desktop, vertical en móvil */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6">
          <button
            onClick={() => setSelectedOption("general")}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
              ${selectedOption === "general" 
                ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
          >
            <Settings className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">General</span>
          </button>
          
          <button
            onClick={() => setSelectedOption("notifications")}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
              ${selectedOption === "notifications" 
                ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
          >
            <Mail className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Notificaciones</span>
          </button>
          
          <button
            onClick={() => setSelectedOption("security")}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
              ${selectedOption === "security" 
                ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
          >
            <Lock className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Seguridad</span>
          </button>
          
          <button
            onClick={() => setSelectedOption("performance")}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
              ${selectedOption === "performance" 
                ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
          >
            <GaugeCircle className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">Rendimiento</span>
          </button>
        </div>

        {/* Contenido principal */}
        <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg p-6">
          <h2 className="text-xl font-medium mb-6 text-gray-800 dark:text-white">
            {selectedOption === "general" && "Configuración General"}
            {selectedOption === "notifications" && "Configuración de Notificaciones"}
            {selectedOption === "security" && "Configuración de Seguridad"}
            {selectedOption === "performance" && "Configuración de Rendimiento"}
          </h2>

          {selectedOption === "general" && (
            <div className="space-y-8">
              {/* Sección de Perfil */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#7E69AB] dark:text-[#9b87f5]">
                  Perfil
                </h3>
                <div className="flex flex-col items-center md:items-start mb-6">
                  <div className="relative mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={profileImage || ""} />
                      <AvatarFallback className="bg-[#F8F7FF] text-[#9b87f5] dark:bg-gray-800">
                        <User className="w-12 h-12" />
                      </AvatarFallback>
                    </Avatar>
                    <label 
                      htmlFor="profile-image" 
                      className="absolute bottom-0 right-0 p-1.5 bg-[#9b87f5] rounded-full cursor-pointer hover:bg-[#8b77e5] transition-colors"
                    >
                      <Camera className="w-4 h-4 text-white" />
                      <input
                        type="file"
                        id="profile-image"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Sube una foto de perfil (máximo 2MB)
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Primer Nombre"
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Segundo Nombre"
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Primer Apellido"
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Segundo Apellido"
                    className="input-field"
                  />
                </div>
              </div>

              <hr className="border-gray-200 dark:border-gray-700" />

              {/* Sección de Correo Electrónico */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#7E69AB] dark:text-[#9b87f5]">
                  Correo Electrónico
                </h3>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Correo electrónico actual"
                    className="input-field w-full md:w-2/3"
                    disabled
                  />
                  <input
                    type="email"
                    placeholder="Nuevo correo electrónico"
                    className="input-field w-full md:w-2/3"
                  />
                </div>
              </div>

              <hr className="border-gray-200 dark:border-gray-700" />

              {/* Sección de Contraseña */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#7E69AB] dark:text-[#9b87f5]">
                  Contraseña
                </h3>
                <div className="space-y-4">
                  <input
                    type="password"
                    placeholder="Contraseña actual"
                    className="input-field w-full md:w-2/3"
                  />
                  <input
                    type="password"
                    placeholder="Nueva contraseña"
                    className="input-field w-full md:w-2/3"
                  />
                  <input
                    type="password"
                    placeholder="Confirmar nueva contraseña"
                    className="input-field w-full md:w-2/3"
                  />
                </div>
              </div>

              {/* Botón de Guardar */}
              <div className="flex justify-end mt-8">
                <Button
                  className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white"
                >
                  Guardar Cambios
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <MobileMenu />
    </div>
  );
};

export default Preferences;
