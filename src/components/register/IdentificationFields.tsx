
import { CreditCard, User } from "lucide-react";
import { RegisterFormData } from "./types";

interface IdentificationFieldsProps {
  formData: RegisterFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const IdentificationFields = ({ formData, handleChange }: IdentificationFieldsProps) => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default IdentificationFields;
