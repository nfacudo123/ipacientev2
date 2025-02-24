
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
  Pill,
  ChevronRight
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
              <div className="flex items-center justify-between w-full px-4 py-2">
                <div className="flex items-center">
                  <Icon className="w-6 h-6 text-[#5799CC] dark:text-[#6EB8D7]" />
                  <span className="ml-2 text-xs text-[#5799CC] dark:text-[#6EB8D7]">{label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#5799CC] dark:text-[#6EB8D7]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              side="right"
              align="start"
              className="bg-white dark:bg-[#2B4C6B] min-w-[200px] border border-gray-100 dark:border-[#5799CC] rounded-lg shadow-lg"
            >
              {submenu.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <DropdownMenuItem className="flex items-center justify-between w-full cursor-pointer">
                          <div className="flex items-center">
                            <item.icon className="w-4 h-4 mr-2" />
                            <span>{item.label}</span>
                          </div>
                          <ChevronRight className="w-4 h-4" />
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        side="right"
                        align="start"
                        className="bg-white dark:bg-[#2B4C6B] min-w-[200px] border border-gray-100 dark:border-[#5799CC] rounded-lg shadow-lg"
                      >
                        {item.submenu.map((subitem) => (
                          <DropdownMenuItem key={subitem.label} asChild>
                            <NavLink 
                              to={subitem.to}
                              className="flex items-center cursor-pointer text-[#5799CC] dark:text-[#6EB8D7] hover:text-[#2B4C6B] dark:hover:text-[#95F1E1]"
                            >
                              <subitem.icon className="w-4 h-4 mr-2" />
                              <span>{subitem.label}</span>
                            </NavLink>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <DropdownMenuItem asChild>
                      <NavLink 
                        to={item.to}
                        className="flex items-center cursor-pointer text-[#5799CC] dark:text-[#6EB8D7] hover:text-[#2B4C6B] dark:hover:text-[#95F1E1]"
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        <span>{item.label}</span>
                      </NavLink>
                    </DropdownMenuItem>
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
