
import { GraduationCap } from "lucide-react";
import { ProfileFormData } from "./types";

interface AcademicInformationProps {
  formData: ProfileFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const AcademicInformation = ({ formData, handleChange }: AcademicInformationProps) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-6">
        <GraduationCap className="w-6 h-6 text-[#4285F4]" />
        <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))]">
          Información Académica
        </h1>
      </div>

      <div className="space-y-6 bg-[hsl(var(--card))] rounded-[24px] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="select-field"
              required
            >
              <option value="">Seleccionar Nivel Educativo</option>
              <option value="primaria">Primaria</option>
              <option value="secundaria">Secundaria</option>
              <option value="tecnico">Técnico</option>
              <option value="tecnologico">Tecnológico</option>
              <option value="pregrado">Pregrado</option>
              <option value="postgrado">Postgrado</option>
            </select>
          </div>

          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              name="academicStatus"
              value={formData.academicStatus}
              onChange={handleChange}
              className="select-field"
              required
            >
              <option value="">Seleccionar Estado</option>
              <option value="en_curso">En Curso</option>
              <option value="terminado">Terminado</option>
              <option value="suspendido">Suspendido</option>
              <option value="aplazado">Aplazado</option>
            </select>
          </div>
        </div>

        <div className="relative">
          <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="profession"
            placeholder="Profesión u Oficio"
            value={formData.profession}
            onChange={handleChange}
            className="input-field"
          />
        </div>
      </div>
      
      <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />
    </div>
  );
};

export default AcademicInformation;
