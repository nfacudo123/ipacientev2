
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
          src={isDark ? "/lovable-uploads/0556f409-35a9-43e5-aaf2-52249b735899.png" : "/lovable-uploads/1685d97b-8505-4da0-a24e-c67e0ae010c0.png"}
          alt="ISISMAWEB Logo"
          className="w-24 h-6 object-contain"
        />
      </div>
      <p className="text-xs text-center mt-2 text-[#7E69AB] dark:text-gray-400">
        Versión 2.0.0
      </p>
    </div>
  );
};
