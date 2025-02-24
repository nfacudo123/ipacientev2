
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarMenuProps {
  isCollapsed: boolean;
}

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

export const SidebarMenu = ({ isCollapsed }: SidebarMenuProps) => {
  const MenuItem = ({ to, icon: Icon, label, end, submenu }: MenuItemProps) => {
    const content = (
      <div className="w-full">
        {submenu ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full">
              <div className={`
                w-full flex items-center justify-between px-4 py-3
                text-[#5799CC] dark:text-gray-300 hover:bg-[#F8F7FF] hover:text-[#6EB8D7] dark:hover:bg-gray-800/50
                transition-colors duration-200
              `}>
                <div className="flex items-center">
                  <Icon className={`${isCollapsed ? 'w-8 h-8' : 'w-5 h-5'} transition-all duration-200`} />
                  {!isCollapsed && <span className="ml-3">{label}</span>}
                </div>
                {!isCollapsed && <ChevronRight className="w-4 h-4" />}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              side={isCollapsed ? "right" : "right"} 
              className="bg-white dark:bg-[hsl(var(--card))] min-w-[200px]"
            >
              {submenu.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full">
                        <DropdownMenuItem className="w-full cursor-pointer">
                          <item.icon className="w-4 h-4 mr-2" />
                          <span>{item.label}</span>
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        side="right" 
                        className="bg-white dark:bg-[hsl(var(--card))] min-w-[200px]"
                      >
                        {item.submenu.map((subitem) => (
                          <DropdownMenuItem key={subitem.label} asChild>
                            <NavLink to={subitem.to} className="cursor-pointer">
                              <subitem.icon className="w-4 h-4 mr-2" />
                              <span>{subitem.label}</span>
                            </NavLink>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <DropdownMenuItem asChild>
                      <NavLink to={item.to} className="cursor-pointer">
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
            className={({ isActive }) => `
              w-full flex items-center ${isCollapsed ? 'justify-center' : ''} px-4 py-3
              ${isActive 
                ? 'text-[#6EB8D7] bg-[#F8F7FF] dark:bg-gray-800/50' 
                : 'text-[#5799CC] dark:text-gray-300 hover:bg-[#F8F7FF] hover:text-[#6EB8D7] dark:hover:bg-gray-800/50'
              }
              transition-colors duration-200
            `}
            preventScrollReset={true}
          >
            <Icon className={`${isCollapsed ? 'w-8 h-8' : 'w-5 h-5'} transition-all duration-200`} />
            {!isCollapsed && <span className="ml-3">{label}</span>}
          </NavLink>
        )}
      </div>
    );

    return isCollapsed && !submenu ? (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            {content}
          </TooltipTrigger>
          <TooltipContent 
            side="right" 
            className="bg-white dark:bg-gray-800 text-sm py-2 px-3 font-medium shadow-lg border border-gray-100 dark:border-gray-700"
          >
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : content;
  };

  return (
    <div className="py-4">
      {!isCollapsed && (
        <div className="px-4 py-2 text-sm text-[#5799CC] dark:text-[#6EB8D7]">MENÚ</div>
      )}
      
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
  );
};
