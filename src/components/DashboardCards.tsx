
export const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[hsl(var(--card))] rounded-xl overflow-hidden shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
          alt="Personal Info" 
          className="w-full h-[200px] object-cover"
        />
        <div className="p-6 bg-[#2B4C6B]">
          <p className="text-white text-lg font-medium">
            Revisa y actualiza tu información personal
          </p>
        </div>
      </div>

      <div className="bg-[hsl(var(--card))] rounded-xl overflow-hidden shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=2071"
          alt="Appointments" 
          className="w-full h-[200px] object-cover"
        />
        <div className="p-6 bg-[#5799CC]">
          <p className="text-white text-lg font-medium">
            Ver tus citas programadas y completadas
          </p>
        </div>
      </div>

      <div className="bg-[hsl(var(--card))] rounded-xl overflow-hidden shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2091"
          alt="Health Blog" 
          className="w-full h-[200px] object-cover"
        />
        <div className="p-6 bg-[#6EB8D7]">
          <p className="text-white text-lg font-medium">
            Mantente actualizado con nuestro blog de salud
          </p>
        </div>
      </div>
    </div>
  );
};
