import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const canHover = window.matchMedia('(hover: hover)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return finePointer && canHover && !reducedMotion;
  });

  useEffect(() => {
    if (!isEnabled) return;
    document.body.classList.add('custom-cursor-enabled');

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const textTrigger = target.closest('[data-cursor-text]');
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-hover');

      if (textTrigger) {
        setCursorText(textTrigger.getAttribute('data-cursor-text') || '');
        setIsHovered(true);
      } else if (isInteractive) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isEnabled, isVisible]);

  if (!isEnabled || !isVisible) {
    return null;
  }

  const hasLabel = Boolean(cursorText);
  const ringSize = hasLabel ? 72 : isHovered ? 48 : 32;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-indigo-500/80 dark:border-indigo-400/90 flex items-center justify-center transition-colors duration-150"
        style={{
          boxShadow: isHovered
            ? '0 0 25px 3px rgba(99, 102, 241, 0.45)'
            : '0 0 10px rgba(99, 102, 241, 0.2)',
          backgroundColor: isHovered
            ? 'rgba(99, 102, 241, 0.15)'
            : 'transparent',
          backdropFilter: hasLabel ? 'blur(4px)' : 'none',
        }}
        animate={{
          x: position.x - ringSize / 2,
          y: position.y - ringSize / 2,
          width: ringSize,
          height: ringSize,
          scale: isClicked ? 0.88 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 320,
          mass: 0.45,
        }}
      >
        <AnimatePresence>
          {hasLabel && (
            <motion.span
              key="label"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="text-[9px] font-bold tracking-widest uppercase text-indigo-600 dark:text-cyan-300 font-mono"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-cyan-400 shadow-sm"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 850,
          mass: 0.08,
        }}
      />
    </>
  );
};
