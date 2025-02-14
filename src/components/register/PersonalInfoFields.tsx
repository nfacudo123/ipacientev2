
import { User } from "lucide-react";
import { RegisterFormData } from "./types";

interface PersonalInfoFieldsProps {
  formData: RegisterFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInfoFields = ({ formData, handleChange }: PersonalInfoFieldsProps) => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default PersonalInfoFields;
