
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";
import { Mail, Lock, Sun, Moon } from "lucide-react";
import RegisterModal from "@/components/RegisterModal";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Simulación de inicio de sesión exitoso
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Éxito",
        description: "Inicio de sesión exitoso.",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Credenciales inválidas. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      });
    }
  };

  const toggleRegisterModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  const toggleForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(!isForgotPasswordModalOpen);
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F1F7FF] dark:bg-[hsl(var(--background))] p-4 transition-colors duration-200">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </button>
      <div className="login-card">
        <div className="flex flex-col items-center justify-center">
          <img 
            key={theme}
            src={!isDark ? "/lovable-uploads/3c4e209f-eba1-4f56-a526-71797329eba2.png" : "/lovable-uploads/401fd9ed-e5c3-4898-a5fb-f4afc6855ed9.png"}
            alt="ISISMAWEB Logo"
            className="w-48 h-12 object-contain mb-6"
          />
          <form onSubmit={handleLogin} className="space-y-6 w-full">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="password"
                placeholder="Contraseña"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="login-button">
              Iniciar Sesión
            </Button>
          </form>
          <div className="flex items-center justify-between w-full mt-4">
            <Link to="#" onClick={toggleForgotPasswordModal} className="link">
              ¿Olvidaste tu contraseña?
            </Link>
            <Link to="#" onClick={toggleRegisterModal} className="link">
              Crear una cuenta
            </Link>
          </div>
        </div>
      </div>

      <RegisterModal isOpen={isRegisterModalOpen} onClose={toggleRegisterModal} />
      <ForgotPasswordModal isOpen={isForgotPasswordModalOpen} onClose={toggleForgotPasswordModal} />
    </div>
  );
};

export default Login;
