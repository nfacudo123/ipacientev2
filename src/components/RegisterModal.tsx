
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PlusSquare, Check } from "lucide-react";
import { useState } from "react";
import PersonalInfoFields from "./register/PersonalInfoFields";
import IdentificationFields from "./register/IdentificationFields";
import ContactFields from "./register/ContactFields";
import PasswordFields from "./register/PasswordFields";
import { RegisterFormData } from "./register/types";
import ReCAPTCHA from "react-google-recaptcha";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

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

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      console.log("Por favor, complete el captcha");
      return;
    }
    if (!acceptedTerms) {
      console.log("Debes aceptar los términos y condiciones");
      return;
    }
    console.log("Register form submitted:", formData);
    onClose();
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
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
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={acceptedTerms}
                onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
              />
              <label 
                htmlFor="terms" 
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                He leído y acepto los{" "}
                <Link 
                  to="/terminos" 
                  className="text-[#5799CC] hover:text-[#2B4C6B] dark:text-[#6EB8D7] dark:hover:text-[#95F1E1]"
                  onClick={(e) => e.stopPropagation()}
                >
                  términos y condiciones
                </Link>
              </label>
            </div>
            
            <div className="w-full flex flex-col items-center justify-center space-y-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-full text-sm text-gray-500 dark:text-gray-400 text-center mb-2">
                  Por favor, verifica que no eres un robot
                </div>
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={handleCaptchaChange}
                  theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
                  className="transform scale-90 sm:scale-100 transition-transform duration-200"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className={`login-button w-full ${(!captchaValue || !acceptedTerms) ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!captchaValue || !acceptedTerms}
            >
              Crear Cuenta
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
