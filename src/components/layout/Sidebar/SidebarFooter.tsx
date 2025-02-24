
import logoLight from "/lovable-uploads/3c4e209f-eba1-4f56-a526-71797329eba2.png";
import logoDark from "/lovable-uploads/401fd9ed-e5c3-4898-a5fb-f4afc6855ed9.png";

interface SidebarFooterProps {
  isCollapsed: boolean;
  isDark: boolean;
}

export const SidebarFooter = ({ isCollapsed, isDark }: SidebarFooterProps) => {
  if (isCollapsed) return null;

  return (
    <div className="mt-auto border-t border-gray-100 dark:border-gray-800 p-4">
      <div className="flex items-center justify-center">
        <img 
          src={isDark ? logoDark : logoLight}
          alt="ISISMAWEB Logo"
          className="w-24 h-6 object-contain"
        />
      </div>
      <p className="text-xs text-center mt-2 text-[#5799CC] dark:text-[#6EB8D7]">
        Versión 2.0.0
      </p>
    </div>
  );
};
