
import { Lock, RefreshCw } from "lucide-react";
import { RegisterFormData } from "./types";

interface PasswordFieldsProps {
  formData: RegisterFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordFields = ({ formData, handleChange }: PasswordFieldsProps) => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default PasswordFields;
