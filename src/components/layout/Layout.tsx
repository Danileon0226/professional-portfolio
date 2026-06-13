import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import { Outlet } from 'react-router-dom';
import ParticlesBg from '../ui/ParticlesBg';
import ScrollProgress from '../ui/ScrollProgress';
import { useState } from 'react';
import HackerMode from '../ui/HackerMode';
import '../ui/HackerMode.css';

const Layout = () => {
  const [hackerMode, setHackerMode] = useState(false);
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollProgress />
      <ParticlesBg />
      <Navbar />
      <Breadcrumbs />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <Outlet />
      </main>
      <Footer />
      {hackerMode && <HackerMode onExit={() => setHackerMode(false)} />}
      <button
        className="hacker-fab"
        onClick={() => setHackerMode(true)}
        style={{
          position: 'fixed',
          bottom: 32,
          left: 32,
          zIndex: 10000,
          background: 'hsl(255 38% 7%)',
          color: 'hsl(265 92% 75%)',
          border: '2px solid hsl(265 92% 68%)',
          borderRadius: '50%',
          width: 56,
          height: 56,
          fontSize: 28,
          fontFamily: 'Fira Mono, Consolas, monospace',
          boxShadow: '0 0 18px hsl(265 92% 60% / 0.55)',
          cursor: 'pointer',
        }}
        aria-label="Modo Hacker"
        title="Modo Hacker"
      >
        &#x3e;_
      </button>
    </div>
  );
};

export default Layout;
