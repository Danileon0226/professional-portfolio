import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Barra de progreso de lectura fija en la parte superior.
 * Usa el scroll global y un spring para suavizar el avance.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-fuchsia-500 to-primary"
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
