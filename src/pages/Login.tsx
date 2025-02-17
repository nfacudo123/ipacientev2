
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
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#F1F7FF] dark:bg-[hsl(var(--background))] transition-colors duration-200">
      <div className="login-card">
        <button
          onClick={toggleTheme}
          className="absolute right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-gray-400" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-500" />
          )}
        </button>

        <div className="icon-container">
          <PlusSquare className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                name="idType"
                value={formData.idType}
                onChange={handleChange}
                className="select-field"
              >
                <option value="" disabled>Tipo de ID</option>
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
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="idNumber"
                placeholder="Número de ID"
                value={formData.idNumber}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
            <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pt-4 text-sm">
          <button 
            onClick={() => setIsRegisterOpen(true)} 
            className="link text-center sm:text-left w-full sm:w-auto"
          >
            Registrarse ahora
          </button>
          <button 
            onClick={() => setIsForgotPasswordOpen(true)} 
            className="link text-center sm:text-left w-full sm:w-auto"
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
