"use client"

import React, { useEffect, useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';

type Props = {};

const GradientCursor = (props: Props) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const gradientCursorStyles = `before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_10px)_var(--y,_5px),#5CBB55_0%,_transparent_100%)] before:opacity-30`;

  return (
    <motion.div
      ref={targetRef}
      className={`${gradientCursorStyles} w-2`}>
    </motion.div>

  );
};

export default GradientCursor;
