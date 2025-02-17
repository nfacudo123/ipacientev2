
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container max-w-xl mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <Link
          to="/politicas-privacidad"
          className="flex items-center justify-between w-full p-4 text-left rounded-lg bg-card hover:bg-muted/50 border border-border transition-colors"
        >
          <span className="text-lg font-medium">Políticas de privacidad</span>
          <ChevronRight className="h-5 w-5" />
        </Link>

        <Link
          to="/consentimiento-informado"
          className="flex items-center justify-between w-full p-4 text-left rounded-lg bg-card hover:bg-muted/50 border border-border transition-colors"
        >
          <span className="text-lg font-medium">Consentimiento informado</span>
          <ChevronRight className="h-5 w-5" />
        </Link>

        <Link
          to="/nosotros"
          className="flex items-center justify-between w-full p-4 text-left rounded-lg bg-card hover:bg-muted/50 border border-border transition-colors"
        >
          <span className="text-lg font-medium">Nosotros</span>
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
        <span className="text-lg font-medium">Versión</span>
        <span className="text-sm text-muted-foreground">2.0</span>
      </div>
    </div>
  );
};

export default About;
