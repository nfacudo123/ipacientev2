import { Heart, Phone, User } from "lucide-react";
import { ProfileFormData } from "./types";

interface AssistanceInformationProps {
  formData: ProfileFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const AssistanceInformation = ({ formData, handleChange }: AssistanceInformationProps) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-[#4285F4]" />
          <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))]">
            Información de Asistencia
          </h1>
        </div>

        <div className="space-y-6 bg-[hsl(var(--card))] rounded-[24px] p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="disabilityCondition"
                placeholder="Condición de Discapacidad"
                value={formData.disabilityCondition}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="relative">
              <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="epsName"
                placeholder="Nombre de EPS"
                value={formData.epsName}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          </div>

          <div className="relative">
            <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="pensionFund"
              placeholder="Fondo de Pensiones"
              value={formData.pensionFund}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <User className="w-6 h-6 text-[#4285F4]" />
          <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))]">
            Información de Contacto
          </h1>
        </div>

        <div className="space-y-6 bg-[hsl(var(--card))] rounded-[24px] p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="responsibleName"
                placeholder="Nombre del Responsable"
                value={formData.responsibleName}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="relationship"
                placeholder="Parentesco"
                value={formData.relationship}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="regimeType"
                placeholder="Tipo de Régimen"
                value={formData.regimeType}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>

            <div className="relative">
              <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="arlName"
                placeholder="Nombre de ARL"
                value={formData.arlName}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="responsiblePhone"
              placeholder="Teléfono del Responsable"
              value={formData.responsiblePhone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AssistanceInformation;
