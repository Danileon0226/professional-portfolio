import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import { Outlet } from 'react-router-dom';
import ParticlesBg from '../ui/ParticlesBg';
import { useState } from 'react';
import HackerMode from '../ui/HackerMode';
import '../ui/HackerMode.css';

const Layout = () => {
  const [hackerMode, setHackerMode] = useState(false);
  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBg quantity={90} opacity={0.5} zIndex="0" />
      <Navbar />
      <Breadcrumbs />
      <main className="container mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-16">
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
          background: '#111',
          color: '#39ff14',
          border: '2px solid #39ff14',
          borderRadius: '50%',
          width: 56,
          height: 56,
          fontSize: 28,
          fontFamily: 'Fira Mono, Consolas, monospace',
          boxShadow: '0 0 16px #39ff14aa',
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
