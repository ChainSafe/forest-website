"use client"

import React, { useEffect, useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';

type Props = {};

const GradientCursorOnScroll = (props: Props) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });


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

  const gradientCursorStyles = `hover:fixed hover:inset-32 hover:z-0 hover:bg-[radial-gradient(circle_farthest-side_at_var(--x,_10px)_var(--y,_5px), #5CBB55_0%,_transparent_100%)] hover:opacity-30`;
  const gradientStyles = `hover:bg-gradient-to-r bg-gradient-to-l from-green-800 to-green-700`;

  return (
    <div className='bg-black'>
    <motion.div
      ref={targetRef}
        className={`my-24 h-full border-2 border-gray-900 bg-black py-24 px-11 ${gradientStyles} max-w-3xl`}>
        <h3 className="mx-auto text-center text-6xl font-medium text-white md:mx-auto lg:max-w-[80%]">
          How to start building with Forest
        </h3>
    </motion.div>
    {/* <motion.div
      ref={targetRef}
        className={`my-24 h-full border-2 border-gray-900 bg-black py-24 px-11 ${gradientCursorStyles} max-w-3xl`}>
        <h3 className="mx-auto text-center text-6xl font-medium text-white md:mx-auto lg:max-w-[80%]">
          How to start building with Forest
        </h3>
    </motion.div> */}

    </div>

  );
};

export default GradientCursorOnScroll;
