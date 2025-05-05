import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import { Outlet } from 'react-router-dom';
import ParticlesBg from '../ui/ParticlesBg';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBg quantity={90} opacity={0.7} zIndex="0" />
      <Navbar />
      <Breadcrumbs />
      <main className="container mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
