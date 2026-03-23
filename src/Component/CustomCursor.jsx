import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over clickable elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList?.contains('cursor-pointer')
      ) {
        setIsHovering(true);
        if (outlineRef.current) {
          outlineRef.current.style.transform = `translate3d(${position.current.x - 30}px, ${position.current.y - 30}px, 0) scale(1.5)`;
          outlineRef.current.style.borderColor = '#your-hover-color';
        }
      } else {
        setIsHovering(false);
        if (outlineRef.current) {
          outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0) scale(1)`;
          outlineRef.current.style.borderColor = '#your-primary-color';
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
      }
      
      if (outlineRef.current && !isHovering) {
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isHovering]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none';
    }
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border-2 border-primary pointer-events-none z-[9999] transition-all duration-1"
        style={{ transform: 'translate3d(-20px, -20px, 0)' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
        style={{ transform: 'translate3d(-6px, -6px, 0)' }}
      />
    </>
  );
};

export default CustomCursor;