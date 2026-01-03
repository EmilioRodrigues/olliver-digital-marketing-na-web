import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number; // Delay in ms
  className?: string;
  direction?: 'bottom' | 'left' | 'right';
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content', 
  delay = 0,
  className = "",
  direction = 'bottom'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    
    switch (direction) {
      case 'left': return '-translate-x-20 opacity-0';
      case 'right': return 'translate-x-20 opacity-0';
      case 'bottom': default: return 'translate-y-8 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{ 
        width,
        transitionDelay: `${delay}ms`
      }}
      className={`transition-all duration-1000 ease-out transform ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;