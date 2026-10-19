import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], label, select, .interactive-hover';
// Over these the custom cursor hides so the native text caret (or the iframe's own cursor) shows
const NATIVE_CURSOR_SELECTOR = 'input, textarea, [contenteditable="true"], iframe';

export const CustomCursor = () => {
  const [isEnabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const canHover = window.matchMedia('(hover: hover)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return finePointer && canHover && !reducedMotion;
  });
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState('default'); // 'default' | 'hover' | 'native'
  const [label, setLabel] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Motion values move the cursor without re-rendering React on every mouse move
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 380, damping: 30, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 380, damping: 30, mass: 0.5 });
  const tagX = useSpring(mouseX, { stiffness: 260, damping: 26, mass: 0.6 });
  const tagY = useSpring(mouseY, { stiffness: 260, damping: 26, mass: 0.6 });

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
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;

      if (target.closest(NATIVE_CURSOR_SELECTOR)) {
        setMode('native');
        setLabel('');
        return;
      }

      const labelled = target.closest('[data-cursor-text]');
      setLabel(labelled ? labelled.getAttribute('data-cursor-text') || '' : '');
      setMode(labelled || target.closest(INTERACTIVE_SELECTOR) ? 'hover' : 'default');
    };

    const handleMouseDown = (e) => {
      setIsPressed(true);
      setRipples((prev) => [...prev, { id: `${e.timeStamp}-${e.clientX}`, x: e.clientX, y: e.clientY }]);
    };

    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const root = document.documentElement;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    root.addEventListener('mouseleave', handleMouseLeave);
    root.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      root.removeEventListener('mouseleave', handleMouseLeave);
      root.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isEnabled, mouseX, mouseY]);

  if (!isEnabled) {
    return null;
  }

  const isHidden = !isVisible || mode === 'native';
  const isHover = mode === 'hover';
  const ringSize = isHover ? 56 : 36;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Click ripples */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute w-4 h-4 -ml-2 -mt-2 rounded-full border-2 border-indigo-500 dark:border-cyan-400"
          style={{ left: ripple.x, top: ripple.y }}
          initial={{ scale: 0.5, opacity: 0.9 }}
          animate={{ scale: 4.5, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onAnimationComplete={() => setRipples((prev) => prev.filter((r) => r.id !== ripple.id))}
        />
      ))}

      {/* Trailing ring (zero-size anchor at the pointer; flex centres the ring on it) */}
      <motion.div
        className="absolute left-0 top-0 w-0 h-0 flex items-center justify-center"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="shrink-0 rounded-full border-2 border-indigo-500/80 dark:border-indigo-400/90"
          animate={{
            width: ringSize,
            height: ringSize,
            opacity: isHidden ? 0 : 1,
            scale: isPressed ? 0.8 : 1,
            backgroundColor: isHover ? 'rgba(99, 102, 241, 0.14)' : 'rgba(99, 102, 241, 0)',
            boxShadow: isHover ? '0 0 24px 2px rgba(99, 102, 241, 0.45)' : '0 0 0px 0px rgba(99, 102, 241, 0)',
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        />
      </motion.div>

      {/* Precise dot */}
      <motion.div
        className="absolute left-0 top-0 w-0 h-0 flex items-center justify-center"
        style={{ x: mouseX, y: mouseY }}
      >
        <motion.div
          className="shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(99,102,241,0.7)]"
          animate={{
            opacity: isHidden ? 0 : 1,
            scale: isHover ? 0.6 : isPressed ? 1.6 : 1,
          }}
          transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        />
      </motion.div>

      {/* Action tag beside the pointer, so it never covers the button text */}
      <motion.div className="absolute left-0 top-0" style={{ x: tagX, y: tagY }}>
        <AnimatePresence>
          {label && !isHidden && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6, x: 14, y: 14 }}
              animate={{ opacity: 1, scale: 1, x: 22, y: 22 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 26 }}
              className="absolute left-0 top-0 whitespace-nowrap rounded-full px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-lg shadow-indigo-500/30"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
