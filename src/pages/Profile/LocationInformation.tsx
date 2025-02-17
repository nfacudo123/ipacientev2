import { Home, Phone, MapPin } from "lucide-react";
import { ProfileFormData } from "./types";

interface LocationInformationProps {
  formData: ProfileFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const LocationInformation = ({ formData, handleChange }: LocationInformationProps) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-6">
        <MapPin className="w-6 h-6 text-[#4285F4]" />
        <h1 className="text-2xl font-bold text-[hsl(var(--text-primary))]">
          Información de Ubicación
        </h1>
      </div>

      <div className="space-y-6 bg-[hsl(var(--card))] rounded-[24px] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              name="housingType"
              value={formData.housingType}
              onChange={handleChange}
              className="select-field"
              required
            >
              <option value="">Tipo de Vivienda</option>
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="landlinePhone"
              placeholder="Teléfono Fijo"
              value={formData.landlinePhone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="select-field"
              required
            >
              <option value="">Seleccionar País</option>
              <option value="colombia">Colombia</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="neighborhood"
              placeholder="Barrio"
              value={formData.neighborhood}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="address"
              placeholder="Dirección"
              value={formData.address}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="otherPhone"
              placeholder="Otro Teléfono"
              value={formData.otherPhone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="select-field"
            required
          >
            <option value="">Seleccionar Ciudad</option>
            <option value="bogota">Bogotá</option>
            <option value="medellin">Medellín</option>
            <option value="cali">Cali</option>
            <option value="barranquilla">Barranquilla</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LocationInformation;
