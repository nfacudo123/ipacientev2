
import { Mail, Phone } from "lucide-react";
import { RegisterFormData } from "./types";

interface ContactFieldsProps {
  formData: RegisterFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactFields = ({ formData, handleChange }: ContactFieldsProps) => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default ContactFields;
