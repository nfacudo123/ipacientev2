
import { Stethoscope } from "lucide-react";

export const SidebarFooter = () => {
  return (
    <div className="border-t border-gray-100 dark:border-gray-800 p-4">
      <div className="flex items-center space-x-3">
        <Stethoscope className="w-8 h-8 text-[#9b87f5]" />
        <div>
          <p className="text-sm font-medium text-[#7E69AB] dark:text-gray-300">
            Nombre de la Empresa
          </p>
          <p className="text-xs text-[#7E69AB] dark:text-gray-400">
            Versión 1.0.0
          </p>
        </div>
      </div>
    </div>
  );
};
