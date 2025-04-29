import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/proyectos',
    element: <div>Proyectos (En construcción)</div>,
  },
  {
    path: '/sobre-mi',
    element: <div>Sobre Mí (En construcción)</div>,
  },
  {
    path: '/contacto',
    element: <div>Contacto (En construcción)</div>,
  },
];

export default routes; 