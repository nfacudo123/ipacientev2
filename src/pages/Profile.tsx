
import { useState } from "react";
import { Save, User, MapPin, GraduationCap, Heart } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { Topbar } from "@/components/layout/Topbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import BasicInformation from "./Profile/BasicInformation";
import LocationInformation from "./Profile/LocationInformation";
import AcademicInformation from "./Profile/AcademicInformation";
import AssistanceInformation from "./Profile/AssistanceInformation";
import { ProfileFormData } from "./Profile/types";

const Profile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState("basic");
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    idType: "",
    idNumber: "",
    userType: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    housingType: "",
    landlinePhone: "",
    country: "",
    neighborhood: "",
    address: "",
    otherPhone: "",
    city: "",
    education: "",
    academicStatus: "",
    profession: "",
    disabilityCondition: "",
    epsName: "",
    pensionFund: "",
    responsibleName: "",
    relationship: "",
    regimeType: "",
    arlName: "",
    responsiblePhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Perfil guardado:', formData);
  };

  return (
    <div className="min-h-screen flex w-full bg-[hsl(var(--background))] transition-colors duration-200">
      <Sidebar 
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
      <Topbar isMenuCollapsed={isMenuCollapsed} />

      <main className={`flex-1 ${isMenuCollapsed ? 'md:ml-[72px]' : 'md:ml-64'} p-4 pt-20 pb-20 md:pb-4 transition-all duration-200`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Mis Datos
            </h1>
          </div>

          {/* Menú horizontal */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <button
              type="button"
              onClick={() => setSelectedOption("basic")}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
                ${selectedOption === "basic" 
                  ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                  : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
            >
              <User className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Información Básica</span>
            </button>
            
            <button
              type="button"
              onClick={() => setSelectedOption("location")}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
                ${selectedOption === "location" 
                  ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                  : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
            >
              <MapPin className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Ubicación</span>
            </button>
            
            <button
              type="button"
              onClick={() => setSelectedOption("academic")}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
                ${selectedOption === "academic" 
                  ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                  : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
            >
              <GraduationCap className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Información Académica</span>
            </button>
            
            <button
              type="button"
              onClick={() => setSelectedOption("assistance")}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
                ${selectedOption === "assistance" 
                  ? "bg-[#F8F7FF] dark:bg-gray-800/50 text-[#9b87f5]" 
                  : "bg-white dark:bg-[hsl(var(--card))] text-[#7E69AB] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800/50"}`}
            >
              <Heart className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Asistencia</span>
            </button>
          </div>

          {/* Contenido principal */}
          <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg p-6">
            <h2 className="text-xl font-medium mb-6 text-gray-800 dark:text-white">
              {selectedOption === "basic" && "Información Básica"}
              {selectedOption === "location" && "Información de Ubicación"}
              {selectedOption === "academic" && "Información Académica"}
              {selectedOption === "assistance" && "Información de Asistencia"}
            </h2>

            {selectedOption === "basic" && <BasicInformation formData={formData} handleChange={handleChange} />}
            {selectedOption === "location" && <LocationInformation formData={formData} handleChange={handleChange} />}
            {selectedOption === "academic" && <AcademicInformation formData={formData} handleChange={handleChange} />}
            {selectedOption === "assistance" && <AssistanceInformation formData={formData} handleChange={handleChange} />}
          </div>

          {/* Botón de guardar fuera del card */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#9b87f5] hover:bg-[#8b77e5] text-white rounded-full transition-colors duration-200 font-medium text-sm"
          >
            <Save className="w-5 h-5" />
            Guardar Cambios
          </button>
        </form>
      </main>

      <MobileMenu />
    </div>
  );
};

export default Profile;
