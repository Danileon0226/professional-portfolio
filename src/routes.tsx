import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import Loader from './components/Loader';

declare module 'html2pdf.js';

// Migración a carga diferida (lazy loading)
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const CV = lazy(() => import('./components/layout/CV'));
const WorkStation = lazy(() => import('./pages/WorkStation'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<Loader />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'workstation',
        element: (
          <Suspense fallback={<Loader />}>
            <WorkStation />
          </Suspense>
        ),
      },
      {
        path: 'cv',
        element: (
          <Suspense fallback={<Loader />}>
            <CV />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
