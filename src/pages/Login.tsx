
import { PlusSquare, User, Key, CreditCard, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import RegisterModal from "@/components/RegisterModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";

const Index = () => {
  const [formData, setFormData] = useState({
    idType: "",
    idNumber: "",
    username: "",
    password: "",
  });

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="login-card">
        <button
          onClick={toggleTheme}
          className="theme-switch"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          ) : (
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
          )}
        </button>

        <div className="icon-container">
          <PlusSquare className="w-8 h-8 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <select
              name="idType"
              value={formData.idType}
              onChange={handleChange}
              className="select-field"
            >
              <option value="" disabled>Tipo de Identificación</option>
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
            />
          </div>

          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              value={formData.username}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="relative">
            <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>

        <div className="flex justify-between items-center pt-4 text-sm space-x-20">
          <button onClick={() => setIsRegisterOpen(true)} className="link whitespace-nowrap">
            Registrarse ahora
          </button>
          <button 
            onClick={() => setIsForgotPasswordOpen(true)} 
            className="link whitespace-nowrap"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>

      <RegisterModal 
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
      
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </div>
  );
};

export default Index;
