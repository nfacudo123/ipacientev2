
import { Settings, Mail, Lock, GaugeCircle } from "lucide-react";

const Preferences = () => {
  return (
    <div className="min-h-screen w-full bg-[hsl(var(--background))] p-4 md:p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Preferencias</h1>
      
      <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg p-6 mb-6">
        <p className="text-gray-600 dark:text-gray-300">
          Selecciona una opción del menú lateral para configurar tus preferencias.
        </p>
      </div>

      <div className="bg-white dark:bg-[hsl(var(--card))] rounded-lg p-6">
        <h2 className="text-xl font-medium mb-6 text-gray-800 dark:text-white">
          CONTENIDO DE LA CONFIGURACIÓN SELECCIONADA
        </h2>
      </div>
    </div>
  );
};

export default Preferences;
