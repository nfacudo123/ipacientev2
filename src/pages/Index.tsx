
import { PlusSquare, User, Key, CreditCard, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    idType: "",
    idNumber: "",
    username: "",
    password: "",
  });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
    <>
      <button
        onClick={toggleTheme}
        className="theme-switch"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-gray-400" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500" />
        )}
      </button>

      <div className="login-card">
        <div className="icon-container">
          <PlusSquare className="w-12 h-12 text-white" strokeWidth={1.5} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              name="idType"
              value={formData.idType}
              onChange={handleChange}
              className="select-field pl-12"
            >
              <option value="" disabled>Tipo de Identificación</option>
              <option value="dni">DNI</option>
              <option value="passport">Pasaporte</option>
              <option value="foreign">Carnet de Extranjería</option>
            </select>
          </div>

          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
            <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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

        <div className="flex justify-between items-center pt-4 text-sm">
          <a href="/register" className="link whitespace-nowrap">
            Registrarse ahora
          </a>
          <a href="/forgot-password" className="link whitespace-nowrap">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </>
  );
};

export default Index;
