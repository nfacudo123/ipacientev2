
import { 
  Home, 
  CalendarDays,
  CalendarPlus,
  Hospital,
  DollarSign,
  BookOpen,
  FileSignature,
  FileCheck,
  ClipboardList,
  TestTube,
  Pill
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface MenuItemProps {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  end?: boolean;
  submenu?: Array<{
    to: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    submenu?: Array<{
      to: string;
      label: string;
      icon: React.ComponentType<{ className?: string }>;
    }>;
  }>;
}

export const MobileMenu = () => {
  const MenuItem = ({ to, icon: Icon, label, end, submenu }: MenuItemProps) => {
    const content = (
      <div className="w-full">
        {submenu ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full">
              <div className="flex flex-col items-center">
                <Icon className="w-6 h-6 mb-1 text-[#5799CC] dark:text-[#6EB8D7]" />
                <span className="text-xs text-[#5799CC] dark:text-[#6EB8D7]">{label}</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              side="top"
              align="center"
              className={`mb-2 bg-white dark:bg-[#2B4C6B] border border-gray-100 dark:border-[#5799CC] rounded-lg shadow-lg ${
                submenu.length === 1 ? 'w-[100px]' : 'min-w-[300px] grid grid-cols-3 gap-4'
              } p-4`}
            >
              {submenu.map((item) => (
                <div key={item.label} className={submenu.length === 1 ? 'w-full' : ''}>
                  {item.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                          <item.icon className="w-6 h-6 mb-1 text-[#5799CC] dark:text-[#6EB8D7]" />
                          <span className="text-xs text-center text-[#5799CC] dark:text-[#6EB8D7]">{item.label}</span>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        side="top"
                        align="center"
                        className="grid grid-cols-2 gap-4 p-4 mb-2 bg-white dark:bg-[#2B4C6B] min-w-[200px] border border-gray-100 dark:border-[#5799CC] rounded-lg shadow-lg"
                      >
                        {item.submenu.map((subitem) => (
                          <NavLink 
                            key={subitem.label}
                            to={subitem.to}
                            className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            <subitem.icon className="w-6 h-6 mb-1 text-[#5799CC] dark:text-[#6EB8D7]" />
                            <span className="text-xs text-center text-[#5799CC] dark:text-[#6EB8D7]">{subitem.label}</span>
                          </NavLink>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <NavLink 
                      to={item.to}
                      className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <item.icon className="w-6 h-6 mb-1 text-[#5799CC] dark:text-[#6EB8D7]" />
                      <span className="text-xs text-center text-[#5799CC] dark:text-[#6EB8D7]">{item.label}</span>
                    </NavLink>
                  )}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <NavLink 
            to={to}
            end={end}
            className={({ isActive }) => `flex flex-col items-center text-xs ${
              isActive 
                ? 'text-[#2B4C6B] dark:text-[#95F1E1]' 
                : 'text-[#5799CC] dark:text-[#6EB8D7]'
            }`}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span>{label}</span>
          </NavLink>
        )}
      </div>
    );

    return content;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[hsl(var(--card))] border-t border-gray-100 dark:border-gray-800 z-50">
      <div className="flex justify-around items-center h-16">
        <MenuItem to="/" icon={Home} label="Inicio" end={true} />
        
        <MenuItem 
          to="/solicitudes" 
          icon={CalendarDays} 
          label="Solicitudes" 
          submenu={[
            { 
              to: "/mis-citas", 
              label: "Agenda tu cita", 
              icon: CalendarPlus 
            }
          ]}
        />
        
        <MenuItem 
          to="/atenciones" 
          icon={Hospital} 
          label="Atenciones"
          submenu={[
            {
              to: "/ingresos",
              label: "Ingresos",
              icon: DollarSign,
              submenu: [
                {
                  to: "/historias",
                  label: "Historias",
                  icon: BookOpen
                },
                {
                  to: "/consentimientos",
                  label: "Consentimientos",
                  icon: FileSignature
                },
                {
                  to: "/certificados",
                  label: "Certificados",
                  icon: FileCheck
                },
                {
                  to: "/encuesta",
                  label: "Encuesta",
                  icon: ClipboardList
                }
              ]
            }
          ]}
        />
        
        <MenuItem to="/laboratorios" icon={TestTube} label="Laboratorios" />
        <MenuItem to="/medicamentos" icon={Pill} label="Medicamentos" />
      </div>
    </nav>
  );
};
