import { User, CreditCard, Mail, Phone } from "lucide-react";
import { ProfileFormData } from "./types";

interface BasicInformationProps {
  formData: ProfileFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const BasicInformation = ({ formData, handleChange }: BasicInformationProps) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-6">
        <User className="w-6 h-6 text-[#4285F4]" />
        <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))]">
          Información Básica
        </h1>
      </div>

      <div className="space-y-6 bg-[hsl(var(--card))] rounded-[24px] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="firstName"
              placeholder="Primer Nombre"
              value={formData.firstName}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="secondName"
              placeholder="Segundo Nombre"
              value={formData.secondName}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="firstLastName"
              placeholder="Primer Apellido"
              value={formData.firstLastName}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="secondLastName"
              placeholder="Segundo Apellido"
              value={formData.secondLastName}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              name="idType"
              value={formData.idType}
              onChange={handleChange}
              className="select-field"
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
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="idNumber"
              placeholder="Número de Identificación"
              value={formData.idNumber}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="select-field"
            >
              <option value="">Tipo de Usuario</option>
              <option value="paciente">Paciente</option>
              <option value="funcionario">Funcionario</option>
              <option value="estudiante">Estudiante</option>
              <option value="visitante">Visitante</option>
            </select>
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
