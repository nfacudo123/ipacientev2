
import { PlusSquare, User, Key } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    idType: "",
    idNumber: "",
    username: "",
    password: "",
  });

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

  return (
    <div className="login-card">
      <div className="icon-container">
        <PlusSquare className="w-12 h-12 text-white" strokeWidth={1.5} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <select
            name="idType"
            value={formData.idType}
            onChange={handleChange}
            className="select-field"
          >
            <option value="" disabled>Tipo de Identificación</option>
            <option value="dni">DNI</option>
            <option value="passport">Pasaporte</option>
            <option value="foreign">Carnet de Extranjería</option>
          </select>
        </div>

        <div>
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
            className="input-field pl-12"
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
            className="input-field pl-12"
          />
        </div>

        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
      </form>

      <div className="flex justify-between pt-4 text-sm">
        <a href="/register" className="link">
          Registrarse ahora
        </a>
        <a href="/forgot-password" className="link">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
};

export default Index;
