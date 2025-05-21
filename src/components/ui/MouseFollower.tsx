import React, { useEffect, useRef, useState } from 'react';
import './MouseFollower.css'; 

const MouseFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [clicks, setClicks] = useState<{ x: number; y: number; id: string }[]>([]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (followerRef.current) {
        followerRef.current.style.left = `${e.clientX}px`;
        followerRef.current.style.top = `${e.clientY}px`;
      }
    };

    const click = (e: MouseEvent) => {
      const id = crypto.randomUUID();
      setClicks((prev) => [...prev, { x: e.clientX, y: e.clientY, id }]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== id));
      }, 500);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('click', click);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('click', click);
    };
  }, []);

  return (
    <>
      <div ref={followerRef} className="mouse-follower" />
      {clicks.map((click) => (
        <span key={click.id} className="click-burst" style={{ left: click.x, top: click.y }} />
      ))}
    </>
  );
};

export default MouseFollower;
