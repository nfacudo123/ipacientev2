
interface SidebarFooterProps {
  isCollapsed: boolean;
  isDark: boolean;
}

export const SidebarFooter = ({ isCollapsed, isDark }: SidebarFooterProps) => {
  if (isCollapsed) return null;

  return (
    <div className="mt-auto border-t border-gray-100 dark:border-gray-800 p-4">
      <div className="flex items-center justify-center">
        <span className={`text-lg font-bold ${isDark ? 'text-[#6EB8D7]' : 'text-[#5799CC]'}`}>
          ISISMAWEB
        </span>
      </div>
      <p className="text-xs text-center mt-2 text-[#5799CC] dark:text-[#6EB8D7]">
        Versión 2.0.0
      </p>
    </div>
  );
};
