
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const getTitleByPath = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Inicio';
    case '/mis-citas':
      return 'Mis Citas';
    case '/profile':
      return 'Mi Perfil';
    case '/login':
      return 'Iniciar Sesión';
    default:
      return '';
  }
};

const PageTitle = () => {
  const location = useLocation();
  const baseTitle = 'ISISMAWEB | Portal Paciente';
  
  useEffect(() => {
    const pageTitle = getTitleByPath(location.pathname);
    document.title = pageTitle ? `${baseTitle} - ${pageTitle}` : baseTitle;
  }, [location]);

  return null;
};

export default PageTitle;
