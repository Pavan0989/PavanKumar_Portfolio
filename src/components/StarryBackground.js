import React, { useEffect, useRef } from 'react';

function StarryBackground() {
  const universeRef = useRef(null);

  useEffect(() => {
    const createStars = () => {
      const universe = universeRef.current;
      if (!universe) return;

      // Create different layers of stars
      const layers = [
        { count: 100, className: 'stars-layer-1 parallax-slow' },
        { count: 50, className: 'stars-layer-2 parallax-medium' },
        { count: 25, className: 'stars-layer-3 parallax-fast' }
      ];

      layers.forEach(layer => {
        const starsContainer = document.createElement('div');
        starsContainer.className = `stars ${layer.className}`;
        
        for (let i = 0; i < layer.count; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.style.left = Math.random() * 100 + '%';
          star.style.top = Math.random() * 100 + '%';
          star.style.animationDelay = Math.random() * 3 + 's';
          starsContainer.appendChild(star);
        }
        
        universe.appendChild(starsContainer);
      });

      // Create shooting stars
      for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = Math.random() * 100 + '%';
        shootingStar.style.animationDelay = Math.random() * 5 + 's';
        shootingStar.style.animationDuration = (Math.random() * 3 + 2) + 's';
        universe.appendChild(shootingStar);
      }

      // Create floating particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 6) + 's';
        universe.appendChild(particle);
      }
    };

    createStars();
  }, []);

  return <div ref={universeRef} className="universe"></div>;
}

export default StarryBackground;
