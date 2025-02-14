
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PlusSquare, User, Mail, Phone, Lock, RefreshCw, CreditCard } from "lucide-react";
import { useState } from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [formData, setFormData] = useState({
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
      <DialogContent className="sm:max-w-[800px] p-0 max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-[hsl(var(--primary))] w-full p-4 sm:p-6 flex items-center justify-center rounded-t-lg">
          <PlusSquare className="w-8 h-8 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
        </div>
        <div className="p-4 sm:p-6 overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl font-semibold text-center mb-6">
              Crear Cuenta
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="Primer Nombre"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input-field pl-12"
                  required
                />
              </div>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  name="secondName"
                  placeholder="Segundo Nombre"
                  value={formData.secondName}
                  onChange={handleChange}
                  className="input-field pl-12"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  name="firstLastName"
                  placeholder="Primer Apellido"
                  value={formData.firstLastName}
                  onChange={handleChange}
                  className="input-field pl-12"
                  required
                />
              </div>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  name="secondLastName"
                  placeholder="Segundo Apellido"
                  value={formData.secondLastName}
                  onChange={handleChange}
                  className="input-field pl-12"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <select
                  name="idType"
                  value={formData.idType}
                  onChange={handleChange}
                  className="select-field pl-12"
                  required
                >
                  <option value="">Tipo de Identificación</option>
                  <option value="CC">CC</option>
                  <option value="CE">CE</option>
                  <option value="PA">PA</option>
                  <option value="RC">RC</option>
                  <option value="TI">TI</option>
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
                  className="input-field pl-12"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="select-field pl-12 w-full"
                required
              >
                <option value="">Tipo de Usuario</option>
                <option value="student">Estudiante</option>
                <option value="teacher">Profesor</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                className="input-field pl-12"
                required
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                className="input-field pl-12"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                className="input-field pl-12"
                required
              />
            </div>
            <div className="relative">
              <RefreshCw className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field pl-12"
                required
              />
            </div>
            <div className="w-full h-20 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center text-sm text-gray-500">
              ReCAPTCHA
            </div>
            <button type="submit" className="login-button">
              Crear Cuenta
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            <a onClick={onClose} className="link cursor-pointer">
              ¿Ya tienes una cuenta? Inicia Sesión
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
