
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PlusSquare } from "lucide-react";
import { useState } from "react";
import PersonalInfoFields from "./register/PersonalInfoFields";
import IdentificationFields from "./register/IdentificationFields";
import ContactFields from "./register/ContactFields";
import PasswordFields from "./register/PasswordFields";
import { RegisterFormData } from "./register/types";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [formData, setFormData] = useState<RegisterFormData>({
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register form submitted:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 bg-white dark:bg-[hsl(var(--card))] rounded-2xl overflow-hidden w-[calc(100%-2rem)] max-w-[800px] border-0 mx-4 sm:mx-auto">
        <div className="bg-[hsl(var(--primary))] w-full p-4 sm:p-6 flex items-center justify-center">
          <PlusSquare className="w-8 h-8 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
        </div>
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-[hsl(var(--text-primary))]">
            Crear Cuenta
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <PersonalInfoFields formData={formData} handleChange={handleChange} />
            <IdentificationFields formData={formData} handleChange={handleChange} />
            <ContactFields formData={formData} handleChange={handleChange} />
            <PasswordFields formData={formData} handleChange={handleChange} />
            
            <div className="w-full h-16 sm:h-20 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center text-xs sm:text-sm text-gray-500">
              ReCAPTCHA
            </div>
            
            <button type="submit" className="login-button w-full">
              Crear Cuenta
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
