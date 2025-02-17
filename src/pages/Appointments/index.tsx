import { useState } from "react";
import { Calendar, Clock, MapPin, Search, User2 } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { Topbar } from "@/components/layout/Topbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { AppointmentFormData } from "./types";

const Appointments = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [formData, setFormData] = useState<AppointmentFormData>({
    specialty: "",
    procedure: "",
    location: "",
    desiredDate: "",
    isStandardProcedure: false,
    isNextAvailable: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Búsqueda de citas:', formData);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex w-full bg-[hsl(var(--background))] transition-colors duration-200">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        onCollapseChange={setIsMenuCollapsed}
      />

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      <MobileHeader toggleMobileMenu={toggleMobileMenu} />
      <Topbar isMenuCollapsed={isMenuCollapsed} />

      <main className={`flex-1 ${isMenuCollapsed ? 'md:ml-[72px]' : 'md:ml-64'} p-4 pt-20 pb-20 md:pb-4 transition-all duration-200`}>
        <div className="w-full max-w-3xl mx-auto space-y-8">
          <div className="bg-[hsl(var(--card))] rounded-[24px] p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <User2 className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[hsl(var(--text-primary))]">Paciente</h2>
                <p className="text-gray-500">Francisco Alejandro Cifuentes Romero</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-4">Seleccione una especialidad de atención</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      className="select-field"
                      required
                    >
                      <option value="">ESPECIALIDAD *</option>
                      <option value="medicina_general">Medicina General</option>
                      <option value="odontologia">Odontología</option>
                      <option value="pediatria">Pediatría</option>
                    </select>
                  </div>

                  <div className="relative">
                    <User2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="procedure"
                      value={formData.procedure}
                      onChange={handleChange}
                      className="select-field"
                      required
                    >
                      <option value="">PROCEDIMIENTO</option>
                      <option value="consulta_general">Consulta General</option>
                      <option value="control">Control</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-4">Seleccione una de las ubicaciones disponibles</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="select-field"
                      required
                    >
                      <option value="">SEDE</option>
                      <option value="norte">Sede Norte</option>
                      <option value="sur">Sede Sur</option>
                      <option value="centro">Sede Centro</option>
                    </select>
                  </div>

                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="desiredDate"
                      value={formData.desiredDate}
                      onChange={handleChange}
                      className="input-field"
                      required
                      placeholder="FECHA DESEADA *"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="isStandardProcedure"
                      checked={formData.isStandardProcedure}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-600">Procedimiento estándar</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="isNextAvailable"
                      checked={formData.isNextAvailable}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-600">Cita más próxima</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#4285F4] hover:bg-[#3b77db] text-white rounded-[16px] transition-colors duration-200 font-medium text-sm"
              >
                <Search className="w-5 h-5" />
                BUSCAR
              </button>
            </form>
          </div>

          <div className="bg-[hsl(var(--card))] rounded-[24px] p-6">
            <h3 className="text-xl font-semibold text-[hsl(var(--text-primary))] mb-6">
              Disponibilidad de horarios
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['12', '12', '13'].map((day, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="mb-4">
                    <h4 className="font-medium">Julio {day}</h4>
                    <p className="text-sm text-gray-500">Dr. {['Santiago Franco', 'Armando Casas', 'Anderson Gonzalez'][index]}</p>
                    <p className="text-sm text-gray-500">Control por medicina general</p>
                  </div>

                  {index === 1 && (
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <select className="select-field flex-1">
                          <option>AM</option>
                          <option>PM</option>
                        </select>
                        <select className="select-field flex-1">
                          <option>HORA</option>
                          {Array.from({length: 12}, (_, i) => i + 1).map(hour => (
                            <option key={hour} value={hour}>{hour}:00</option>
                          ))}
                        </select>
                      </div>
                      <button className="w-full py-2 border-2 border-[#4285F4] text-[#4285F4] rounded-[16px] hover:bg-[#4285F4] hover:text-white transition-colors duration-200 text-sm font-medium">
                        AGENDAR
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <MobileMenu />
    </div>
  );
};

export default Appointments;
