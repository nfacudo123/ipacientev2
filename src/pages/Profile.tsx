import { useState } from "react";
import { Save } from "lucide-react";
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
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

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

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la lógica para guardar el perfil
    console.log('Perfil guardado:', formData);
  };

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
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-8">
          <BasicInformation formData={formData} handleChange={handleChange} />
          <LocationInformation formData={formData} handleChange={handleChange} />
          <AcademicInformation formData={formData} handleChange={handleChange} />
          <AssistanceInformation formData={formData} handleChange={handleChange} />
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-[#4285F4] hover:bg-[#3b77db] text-white rounded-[16px] transition-colors duration-200 font-medium text-sm"
            >
              <Save className="w-5 h-5" />
              Guardar Perfil
            </button>
          </div>
        </form>
      </main>

      <MobileMenu />
    </div>
  );
};

export default Profile;
