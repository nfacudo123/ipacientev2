
export const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[hsl(var(--card))] rounded-xl overflow-hidden shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
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
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
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
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
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
