
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Key, Mail, CreditCard } from "lucide-react";
import { useState } from "react";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgotPasswordModal = ({ isOpen, onClose }: ForgotPasswordModalProps) => {
  const [formData, setFormData] = useState({
    idType: "",
    idNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password recovery form submitted:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 bg-white dark:bg-[hsl(var(--card))] rounded-2xl overflow-hidden w-[calc(100%-2rem)] max-w-[400px] border-0 mx-4 sm:mx-auto">
        <div className="bg-[hsl(var(--primary))] w-full p-4 sm:p-6 flex items-center justify-center">
          <Key className="w-8 h-8 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
        </div>
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-[hsl(var(--text-primary))]">
            Recuperar Contraseña
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <select
                name="idType"
                value={formData.idType}
                onChange={handleChange}
                className="select-field"
                required
              >
                <option value="">Tipo de Identificación</option>
                <option value="CC">CC</option>
                <option value="CE">CE</option>
                <option value="PA">PA</option>
                <option value="RC">RC</option>
                <option value="TI">TI</option>
                <option value="AS">AS</option>
                <option value="MS">MS</option>
                <option value="NU">NU</option>
                <option value="NI">NI</option>
                <option value="PIP">PIP</option>
              </select>
            </div>

            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                name="idNumber"
                placeholder="Número de Identificación"
                value={formData.idNumber}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>

            <button type="submit" className="login-button w-full">
              Recuperar Contraseña
            </button>
          </form>
          <button 
            onClick={onClose}
            className="w-full text-center mt-4 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            Volver al Inicio de Sesión
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
